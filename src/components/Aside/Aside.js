import React from 'react'
import './Aside.css';
import showerIcon from "../../assets/images/Shower.png";

export default function Aside() {
  return (
    <div className="aside">
      <div className="aside-overlay">
        <div className="content-overlay">
          <div>
            <div className='button-close'><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></div>
          </div>
          <div class="content-search">
            <input className="input-search" placeholder='search location' />
            <button className="button-search">Search</button>
          </div>
        </div>
      </div>
      <div className="content-buttons">
        <button className="button">Search for places</button>
        <button className="button button-round"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
      </div>
      <div className="content-picture-weather-today">
        <img src={showerIcon} alt="icone weather of the day" />
      </div>
      <div className="content-info-weather-today">
        <p class="temperature">15<span class="measurement">°C</span></p>
        <p class="weather">Shower</p>
        <p>Today ・ Fri, 5 Jun</p>
        <p><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Helsinki</p>
      </div>
    </div>
  )
}
