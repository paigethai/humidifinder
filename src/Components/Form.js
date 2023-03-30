// Form.js
import { useState } from 'react';

const Form = (props) => {
    
    const  [cityInput, setCityInput] = useState("");
    // conditional statement here
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
        <section className="form">
            <div className="wrapper">
                <form onSubmit={ handleSubmit }>
                    { props.apiError ? <h3>You sure you spelt that right?</h3> : null }
                    <label htmlFor='city'>Where you at? Type in the city...</label>
                    <input 
                        type="text" 
                        id='city' 
                        name='city' 
                        value={cityInput} 
                        onChange={ handleChange }
                    />
                    <button>To Sweat or Not Sweat?</button>
                </form>
            </div>
        </section>
    )
}


export default Form;