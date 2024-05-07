import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp() {

let [weather, setWeather] = useState({
    city: "Delhi",
    feelslike: 30.55,
    humidity: 27,
    temp: 32.05,
    temp_max: 32.05,
    temp_min: 32.05,
    weather: "haze"
})

function updateInfo(newInfo) {
    setWeather(newInfo);
}

    return(
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weather}/>
        </div>
    )
}