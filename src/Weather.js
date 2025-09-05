import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("°C");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    const celsius = response.data.main.temp;
    const farenheit = (celsius * 9) / 5 + 32;

    setWeather({
      temperatureC: Math.round(celsius),
      temperatureF: Math.round(farenheit),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "2bd326a60dc89a53287e446e819664df";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function toggleUnit() {
    setUnit(unit === "C" ? "F" : "C");
  }

  const temperatureDisplay =
    unit === "C"
      ? `${weather.temperatureC}°C | `
      : `${weather.temperatureF}°F | `;

  const unitToggle = (
    <span
      className="unit-toggle"
      title="Click to change unit"
      onClick={toggleUnit}
    >
      {" "}
      | {unit === "C" ? "°F" : "°C"}
    </span>
  );

  return (
    <div className="weather-search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>

      {loaded && (
        <div className="weather-result">
          <div className="weather-info">
            <ul className="weather-list">
              <li>
                Temperature: {temperatureDisplay}
                {unitToggle}
              </li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
              <li className="icon-item">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="weather-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

<footer>
      This project was coded by Rhian Jenkins & is open-sourced on <a href="https://github.com/Rhitree/weather-app-react">GitHub</a> hosted on <a href="https://enchanting-daffodil-161e3c.netlify.app/">Netlify</a>
    </footer>
