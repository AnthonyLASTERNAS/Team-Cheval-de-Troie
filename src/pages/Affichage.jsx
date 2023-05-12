import { useState } from "react";
import { getFormattedWeatherData } from "../components/WeatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleButtonClick = async () => {
    const data = await getFormattedWeatherData("Berne");
    setWeatherData(data);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Afficher la météo</button>
      {weatherData && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.country}
          </h2>
          <img src={weatherData.iconURL} alt="icon" />
          <p style={{ color: "white" }}>{weatherData.description}</p>
          <p style={{ color: "white" }}>Température : {weatherData.temp}°C</p>
          <p style={{ color: "white" }}>
            Ressenti : {weatherData.feels_like}°C
          </p>
          <p style={{ color: "white" }}>
            Température min : {weatherData.temp_min}°C
          </p>
          <p style={{ color: "white" }}>
            Température max : {weatherData.temp_max}°C
          </p>
          <p style={{ color: "white" }}>
            Pression : {weatherData.pressure} hPa
          </p>
          <p style={{ color: "white" }}>Humidité : {weatherData.humidity}%</p>
          <p style={{ color: "white" }}>
            Vitesse du vent : {weatherData.speed} km/h
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
