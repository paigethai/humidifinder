// Form.js
import { useState, useEffect } from 'react';
import axios from 'axios';


const Form = ({setHumidex}) => {
    
    const  [cityInput, setCityInput] = useState("");

    const getHumidex = () => {
            if (cityInput) { 
                axios({
                    url: 'https://api.openweathermap.org/data/2.5/weather',
                    params: {
                        appid: '9092b79e834eb0a03c10d81e200b49c8',
                        q: cityInput, 
                        units: 'metric',
                    }
                }).then( (apiData) => {
                    console.log(apiData.data.main.humidity);
                    setHumidex(apiData.data.main.humidity);
                } )
            } 
        } 

    const handleSubmit = (event) => {
        console.log("change has been made");
        event.preventDefault();
        getHumidex();
    }


    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' name='city' value={cityInput} onChange={ (e) => { setCityInput(e.target.value) } }/>
            <button>Click</button>
        </form>

    )
}


export default Form;