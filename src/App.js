import React, { useEffect, useState } from 'react';
import './App.css';
import ImageWeather from './components/ImageWeather';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_BASE_URL,
};

function App() {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [query, setQuery] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [futureWeather, setFutureWeather] = useState("");

  useEffect(() => {
    (async () => {
      const result = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
      setSearch("");
      setWeather(result);
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&exclude=hourly,minutely&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setFutureWeather(result);
        })
    })()
  }, [query])

  function dateBuild(d) {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  function dayWeek(timestamp) {
    return (new Date(timestamp * 1000)).toLocaleDateString('en-US', { weekday: 'long' })
  }

  const execSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
      setToggleOverlay(false);
    }
  };

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
              <input className="input-search" type='text' placeholder='search location' onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyPress={execSearch} />
              <button onClick={() => { setQuery(search); setToggleOverlay(false) }} className="button-search">Search</button>
            </div>
          </div>
        </div>
        <div className="content-buttons">
          <button onClick={() => openOverlay()} className="button">Search for places</button>
          <button className="button button-round"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
        </div>
        <div className="content-picture-weather-today">
          {weather ? <ImageWeather status={weather.weather[0].main} /> : ''}
        </div>
        <div className="content-info-weather-today">
          {weather ? <p className="temperature">{Math.round(weather.main.temp)}<span className="measurement">°C</span></p> : ''}
          {weather ? <p className="weather">{weather.weather[0].main}</p> : ''}
          <p>Today ・ {dateBuild(new Date())}</p>
          {weather ? <p><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>{weather.name}</p> : ''}
        </div>
      </div>
      <div className="content">
        <div className="content-center">
          <div className="content-measurement">
            <button className="button button-round active">°C</button>
            <button className="button button-round">°F</button>
          </div>
          <ul className="content-card-weather">
            {futureWeather ? futureWeather.daily.slice(1, 6).map(day => (
              <li className="card-weather">
                <p>{dayWeek(day.dt)}</p>
                <div className="content-icon">
                  <ImageWeather status={day.weather[0].main} className="icon-weather" />
                </div>
                <div className="content-max-min-temperature">
                  <p>{Math.round(day.temp.max)}°C</p>
                  <p className="min-temperature">{Math.round(day.temp.min)}°C</p>
                </div>
              </li>
            )) : ''}
          </ul>
          <p className="subtitle">Today's Highlights</p>
          <ul className="content-card-highlights">
            <li className="card-highlights">
              <p>Wind speed</p>
              {weather ? <p className="measurement"><span className="number">{weather.wind.speed}</span> m/s</p> : ''}
              <div className="content-wind"><span className="icon-wind"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></span>wsw</div>
            </li>
            <li className="card-highlights">
              <p>Humidity</p>
              {weather ? <p className="measurement"><span className="number">{weather.main.humidity}</span> %</p> : ''}
              {weather ? <progress value={(weather.main.humidity).toFixed(2)} max="100"></progress> : ''}
            </li>
            <li className="card-highlights">
              <p>Visbility</p>
              {weather ? <p className="measurement"><span className="number">{Math.round(weather.visibility / 1000)}</span> miles</p> : ''}
            </li>
            <li className="card-highlights">
              <p>Air Pressure</p>
              {weather ? <p className="measurement"><span className="number">{weather.main.pressure}</span> mb</p> : ''}
            </li>
          </ul>
          <p className="dev">JessicaThi @ DevChallenges.io</p>
        </div>
      </div>
    </div>
  );
}

export default App;
