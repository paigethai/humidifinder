// Form.js
import { useState, useEffect } from 'react';


const Form = (props) => {
    
    const  [cityInput, setCityInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userCityInput(cityInput);
    }

    const handleChange = (event) => {
        event.preventDefault();
        setCityInput(event.target.value);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor='city'>City</label>
            <input 
                type="text" 
                id='city' 
                name='city' 
                value={cityInput} 
                onChange={ handleChange }
            />
            <button>Click</button>
        </form>

    )
}


export default Form;