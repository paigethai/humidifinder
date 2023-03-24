import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';

const PollenInfo = () => {    
    const [humidex, setHumidex] = useState('');
    // const [apiError, setApiError] = useState(false);
        // error handling ^
    
    


    // JSX 
    return (
        <Form setHumidex={setHumidex} />
    )


}

export default PollenInfo;