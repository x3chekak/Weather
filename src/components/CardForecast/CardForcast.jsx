import './style.css';

const CardForecast = ({data, index}) => {
    return(
        <div className="cardforecast">
            <div className="cardforecast__body">
                <div className="cardforecast_date">{data?.forecast?.forecastday[index].date}</div>
                <div className="cardforecast_timesofday">
                    <div className="timesofday-item">Ночь</div>
                    <div className="timesofday-item">Утро</div>
                    <div className="timesofday-item">День</div>
                    <div className="timesofday-item">Вечер</div>
                </div>
                <div className="cardforecast_condition">
                    <div className="cardforecast_condition-item"><img src={data?.forecast?.forecastday[index].hour[2].condition.icon}/></div>
                    <div className="cardforecast_condition-item"><img src={data?.forecast?.forecastday[index].hour[7].condition.icon} /></div>
                    <div className="cardforecast_condition-item"><img src={data?.forecast?.forecastday[index].hour[14].condition.icon} /></div>
                    <div className="cardforecast_condition-item"><img src={data?.forecast?.forecastday[index].hour[20].condition.icon} /></div>
                </div>
                <div className="temperature_title">Температура воздуха, &deg;C</div>
                <div className="cardforecast_temperature">
                    <div className="cardforecast_temperature-item">
                        {data?.forecast?.forecastday[index].hour[2].temp_c > 0 
                            ? ('+' + data.forecast?.forecastday[index].hour[2].temp_c) 
                        : data?.forecast?.forecastday[index].hour[2].temp_c}
                    </div>
                    <div className="cardforecast_temperature-item">
                        {data?.forecast?.forecastday[index].hour[7].temp_c > 0 
                            ? ('+' + data.forecast?.forecastday[index].hour[7].temp_c) 
                        : data?.forecast?.forecastday[index].hour[7].temp_c}
                    </div>
                    <div className="cardforecast_temperature-item">
                        {data?.forecast?.forecastday[index].hour[14].temp_c > 0 
                            ? ('+' + data.forecast?.forecastday[index].hour[14].temp_c) 
                        : data?.forecast?.forecastday[index].hour[14].temp_c}
                    </div>
                    <div className="cardforecast_temperature-item">
                        {data?.forecast?.forecastday[index].hour[20].temp_c > 0 
                            ? ('+' + data.forecast?.forecastday[index].hour[20].temp_c) 
                        : data?.forecast?.forecastday[index].hour[20].temp_c}
                    </div>
                </div>
                <div className="wind_title">Скорость ветра, км/ч</div>
                <div className="cardforecast_wind">
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[2].wind_kph}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[7].wind_kph}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[14].wind_kph}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[20].wind_kph}</div>
                </div>
                <div className="precip_title">Количество осадков, мм</div>
                <div className="cardforecast_precip">
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[2].precip_mm}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[7].precip_mm}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[14].precip_mm}</div>
                    <div className="cardforecast_wind-item">{data?.forecast?.forecastday[index].hour[20].precip_mm}</div>
                </div>

            </div>
        </div>
    )
}

export default CardForecast;