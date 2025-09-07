const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getWeatherInfo = async (city) => {
    try {   
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let text = await response.text();
        let jsonResponse = JSON.parse(text);

        let result = {
        city :city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    } catch (e) {
        throw e;
    }
    
    
};


export default getWeatherInfo;