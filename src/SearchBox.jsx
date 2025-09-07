import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useEffect, useState } from 'react';
import getWeatherInfo from "./getweather.js";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo(city.toUpperCase());
            updateInfo(newInfo);
            setError(false);
        } catch (error) {
            setError(true);
        }
       
    }

    
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>

                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color : "red"}}>No such place exits in our API</p>}
            </form>
        </div>
    );
}