import { useState } from "react";
import { getFormattedWeatherData } from "./api";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const handleButtonClick = async () => {
    const data = await getFormattedWeatherData(city);
    setWeatherData(data);
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleButtonClick}>Afficher la météo</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.country}</h2>
          <img src={weatherData.iconURL} alt="icon" />
          <p>{weatherData.description}</p>
          <p>Température : {weatherData.temp}°C</p>
          <p>Ressenti : {weatherData.feels_like}°C</p>
          <p>Température min : {weatherData.temp_min}°C</p>
          <p>Température max : {weatherData.temp_max}°C</p>
          <p>Pression : {weatherData.pressure} hPa</p>
          <p>Humidité : {weatherData.humidity}%</p>
          <p>Vitesse du vent : {weatherData.speed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
