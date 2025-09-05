import React from "react";
import './App.css';
import Weather from './Weather';
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
          <Weather />
          <footer>
          This project was coded by Rhian Jenkins & is open-sourced on <a href="https://github.com/Rhitree/weather-app-react" target="_blank">GitHub</a> hosted on <a href="https://enchanting-daffodil-161e3c.netlify.app/" target="_blank">Netlify</a>
        </footer>
      </div>
    </div>
  );
}