import { useState,useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const API_KEY = 'c7ab961e7fa8457cb2a180833250603';


function geoTownFetch(lat, lng, setGeoFetchResult) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => {
      const city = data.address.city || data.address.town || data.address.village || 'Город не найден';
      setGeoFetchResult(city)
      console.log('Город:', city);
    })
    .catch(error => console.error('Ошибка:', error));
}

function geoFetch(setGeoFetchResult) {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        geoTownFetch(latitude, longitude, setGeoFetchResult)

        console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
      },
      function (error) {
        console.error('Ошибка получения геоданных:', error);
        setGeoFetchResult('Москва')
      },
      {
        enableHighAccuracy: true,
        timeout: 500,
        maximumAge: 0
      }
    );
  } else {
    console.log('Геолокация не поддерживается в этом браузере.');
    setGeoFetchResult('Москва')
  }
}

function App() {

  const [data, setData] = useState({})
  const [town, setTown] = useState('');
  const [numOfDays,setNumOfDays] = useState(1);
  const [geoFetchResult, setGeoFetchResult] = useState('');

  const changeNumOfDays = (num) => {
    setNumOfDays(num)
  }

  const handleInputChange = (e) => {
    setTown(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWeatherFetch(town);
    setTown('')
  };

  const handleWeatherFetch = (town) => {
    if (town) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${town}&days=7`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)

      });
    }
  }

  useEffect(() => {
    geoFetch(setGeoFetchResult);
    handleWeatherFetch(geoFetchResult)
  }, [geoFetchResult]);

  return (
    <>
      <Header handleSubmit={handleSubmit} handleInputChange={handleInputChange} changeNumOfDays={changeNumOfDays} town={town} />
      <Main data={data} numOfDays={numOfDays} changeNumOfDays={changeNumOfDays}/>
    </>
  )
}

export default App