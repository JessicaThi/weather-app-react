import React, { useState } from 'react';
import './App.css';
import showerIcon from "./assets/images/Shower.png";
import snowIcon from "./assets/images/Snow.png";

function App() {
  const [toggleOverlay, setToggleOverlay] = useState(false);

  const closeOverlay = () => {
    setToggleOverlay(false)
  }

  const openOverlay = () => {
    setToggleOverlay(true)
  }

  return (
    <div className="App">
      <div className="aside">
        <div className={toggleOverlay ? "aside-overlay active" : "aside-overlay"}>
          <div className="content-overlay">
            <div>
              <div onClick={() => closeOverlay()} className='button-close'><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></div>
            </div>
            <div className="content-search">
              <input className="input-search" placeholder='search location' />
              <button className="button-search">Search</button>
            </div>
          </div>
        </div>
        <div className="content-buttons">
          <button onClick={() => openOverlay()} className="button">Search for places</button>
          <button className="button button-round"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
        </div>
        <div className="content-picture-weather-today">
          <img src={showerIcon} alt="icone weather of the day" />
        </div>
        <div className="content-info-weather-today">
          <p className="temperature">15<span className="measurement">°C</span></p>
          <p className="weather">Shower</p>
          <p>Today ・ Fri, 5 Jun</p>
          <p><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Helsinki</p>
        </div>
      </div>
      <div className="content">
        <div className="content-center">
          <div className="content-measurement">
            <button className="button button-round active">°C</button>
            <button className="button button-round">°F</button>
          </div>
          <ul className="content-card-weather">
            <li className="card-weather">
              <p>Tomorrow</p>
              <div className="content-icon">
                <img className="icon-weather" src={showerIcon} alt="icone weather" />
              </div>
              <div className="content-max-min-temperature">
                <p>16°C</p>
                <p className="min-temperature">11°C</p>
              </div>
            </li>
            <li className="card-weather">
              <p>Tomorrow</p>
              <div className="content-icon">
                <img className="icon-weather" src={showerIcon} alt="icone weather" />
              </div>
              <div className="content-max-min-temperature">
                <p>16°C</p>
                <p className="min-temperature">11°C</p>
              </div>
            </li>
            <li className="card-weather">
              <p>Tomorrow</p>
              <div className="content-icon">
                <img className="icon-weather" src={snowIcon} alt="icone weather" />
              </div>
              <div className="content-max-min-temperature">
                <p>16°C</p>
                <p className="min-temperature">11°C</p>
              </div>
            </li>
            <li className="card-weather">
              <p>Tomorrow</p>
              <div className="content-icon">
                <img className="icon-weather" src={showerIcon} alt="icone weather" />
              </div>
              <div className="content-max-min-temperature">
                <p>16°C</p>
                <p className="min-temperature">11°C</p>
              </div>
            </li>
            <li className="card-weather">
              <p>Tomorrow</p>
              <div className="content-icon">
                <img className="icon-weather" src={showerIcon} alt="icone weather" />
              </div>
              <div className="content-max-min-temperature">
                <p>16°C</p>
                <p className="min-temperature">11°C</p>
              </div>
            </li>
          </ul>
          <p className="subtitle">Today's Highlights</p>
          <ul className="content-card-highlights">
            <li className="card-highlights">
              <p>Wind status</p>
              <p className="measurement"><span className="number">7</span> mph</p>
              <div className="content-wind"><span className="icon-wind"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></span>wsw</div>
            </li>
            <li className="card-highlights">
              <p>Humidity</p>
              <p className="measurement"><span className="number">84</span> %</p>
              <progress value="84" max="100"></progress>
            </li>
            <li className="card-highlights">
              <p>Visbility</p>
              <p className="measurement"><span className="number">6,4</span> miles</p>
            </li>
            <li className="card-highlights">
              <p>Air Pressure</p>
              <p className="measurement"><span className="number">998</span> mb</p>
            </li>
          </ul>
          <p className="dev">JessicaThi @ DevChallenges.io</p>
        </div>
      </div>
    </div>
  );
}

export default App;
