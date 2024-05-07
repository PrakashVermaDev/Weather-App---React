import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "03ae5451d20751233f7a17cb736d1bd4"

    async function getWeatherInfo() {
        try{ 
            
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json()
 
        let result = {
         city: city,
         temp: jsonResponse.main.temp,
         temp_max: jsonResponse.main.temp_max,
         temp_min: jsonResponse.main.temp_min,
         humidity: jsonResponse.main.humidity,
         feelslike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;

        } catch(err) {
            throw err;
        }
      
    }

    function handlechange(event) {
        setCity(event.target.value);
    }

    async function handlesubmit(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err) {
            seterror(true);
        }
        
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
            <TextField id="outlined-basic" onChange={handlechange} label="City Name" value={city} variant="outlined" required/>
            <br></br><br></br>
            <Button variant="contained" type='Submit'>
            Search
            </Button>
            {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}