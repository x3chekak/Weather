import { useState } from 'react';
import './style.css'
import Card from '../Card/Card'
import CardForecast from '../CardForecast/CardForcast';

const Main = ({data, numOfDays}) => {
    if (data) {
    return (
        <div className="main">
            <Card data={data}/>
            {numOfDays > 1 && Array(numOfDays).fill().map((_, index) => <CardForecast key={index} data={data} index={index}/>)}
        </div>
        
    )}
};

export default Main;