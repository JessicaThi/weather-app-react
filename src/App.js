import './App.css';
import Aside from './components/Aside/Aside';
import showerIcon from "./assets/images/Shower.png";
import snowIcon from "./assets/images/Snow.png";

function App() {
  return (
    <div className="App">
      <Aside />
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
              <div className="content-wind"><span className="icon-wind"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></span>wsw</div>
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
