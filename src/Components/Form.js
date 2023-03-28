// Form.js
import { useState, useEffect } from 'react';


const Form = (props) => {
    
    const  [cityInput, setCityInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userCityInput(cityInput);
        setCityInput(cityInput)
    }

    const handleChange = (event) => {
        event.preventDefault();
        setCityInput(event.target.value);
    }

    return (
        <form onSubmit={ handleSubmit }>
            { props.apiError ? <h2>You sure you spelt that right?</h2> : null }
            <label htmlFor='city'>City</label>
            <input 
                type="text" 
                id='city' 
                name='city' 
                value={cityInput} 
                onChange={ handleChange }
            />
            <button>To Sweat or Not Sweat?</button>
        </form>

    )
}


export default Form;