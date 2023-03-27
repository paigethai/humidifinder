import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';

const HumidexInfo = () => {   

    const [humidex, setHumidex] = useState('');
    const  [cityInput, setCityInput] = useState("");
    // const [apiError, setApiError] = useState(false);
        // error handling ^

    
    const userCityInput = (city) => {
        setCityInput(city);
    }
    
    useEffect( () => {
        axios({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            params: {
                appid: '9092b79e834eb0a03c10d81e200b49c8',
                q: cityInput, 
                units: 'metric',
            }
        }).then( (apiData) => {
            setHumidex(apiData.data.main.humidity);
        } )
    }, [cityInput])
    

    return (
        <Form userCityInput={ userCityInput } />

    )


}

export default HumidexInfo;