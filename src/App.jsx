import { useState,useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const API_KEY = 'c7ab961e7fa8457cb2a180833250603';

function App() {

  const [data, setData] = useState({})
  const [town, setTown] = useState('Moscow')
  const [numOfDays,setNumOfDays] = useState(1)

  const changeNumOfDays = (num) => {
    setNumOfDays(num)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(town);
    setTown(e.target.value)
  }

  const handleClick = () => {
    if (town) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${town}&days=7`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      });
    
      console.log(town)}
      
  }

  useEffect(() =>{
    handleClick()

  }, []);
  
  return (
    <>
      <Header handleSubmit={handleSubmit} handleClick={handleClick} changeNumOfDays={changeNumOfDays} />
      <Main data={data} numOfDays={numOfDays} changeNumOfDays={changeNumOfDays}/>
    </>
  )
}

export default App
