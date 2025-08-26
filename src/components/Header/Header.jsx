import { useState } from 'react';
import './style.css';
import Button from '../Button/Button';

const Header = ({ handleSubmit, town, handleClick, changeNumOfDays }) => {

    
    // const [task, setTask] = useState({
    //     id: '',
    //     name: '',
    //     title: 'Backlog',


    // });
    // console.log(task)

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setTasks((prev) => {
    //         const list = [...prev, task];
    //         localStorage.setItem("tasks", JSON.stringify(list));
    //         return list;
    //     });

    //     setTask({
    //         id: '',
    //         name: '',
    //         title: 'Backlog',
    //     })
    // };



    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input type="text"
    //             onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
    //             value={task.name}

    //         />
    //         <button>Create</button>
    //     </form>
    return (
        <header className="header">
            <h1 className="header__title">Прогноз погоды</h1>
            <form onSubmit={handleSubmit}>
                <input className='header__input' 
                    type="text" 
                    value={town} 
                    placeholder="Введите название города"
                    onChange={(e) => handleSubmit(e)} /> 
                <button className="header__button" onClick={handleClick}>Показать</button>
            </form>
            <nav className='forcast'>
                <ul className='forcast_list'>
                    <li className='three_day'><Button text={'Сейчас'} forecastOn={1} changeNumOfDays={changeNumOfDays}/></li>
                    <li className='three_day'><Button text={'на 3 дня'} forecastOn={3} changeNumOfDays={changeNumOfDays} /></li>
                    
                </ul>
            </nav>
        </header>
    )
};

export default Header;