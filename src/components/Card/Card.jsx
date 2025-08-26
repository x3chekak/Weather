import { useState } from 'react';
import './style.css';
//0, 750063755419211
const Card = ({data}) => {
    console.log(data)
    return (
        <div className="card">
            <div className="card__body">
                <div className="weather_info">
                    <div className="town">
                        <h2>{data.location?.name}</h2>
                    </div>
                    <div className="temperature">
                        {data.current?.temp_c > 0
                        ? ('+' + data.current?.temp_c) 
                        : (data.current?.temp_c)}&deg;c
                     </div>
                    <div className="feelslike">Ощущается как: {data.current?.feelslike_c}&deg;c</div>
                    <div className="wind_kph">Порывы ветра: <b>{data.current?.wind_kph}</b>км/ч</div>
                    <div className="pressure">Давление:<br></br> <b>{Math.round(data.current?.pressure_mb * 0.750063)}</b> мм.рт.ст.</div>
                    <div className="humidity">Влажность: <b>{data.current?.humidity}</b>%</div>
                    
                </div>
                <div className="icon"><img className='image' src={data.current?.condition.icon}/></div>
            </div>
        </div>
    )
};

export default Card;