import './style.css';

const Button = ({ text, forecastOn, changeNumOfDays }) => {
    return(
        <button className='main_button' onClick={()=> changeNumOfDays(forecastOn)}>{text}</button>
    )
}

export default Button