import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo , setWaetherInfo] = useState({
        city : "Mumbai",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze"
    })

    let updateInfo = (result) => {
        setWaetherInfo(result);
    }

    return (
        <div>
            <h2 style={{textAlign : "center"}}>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}