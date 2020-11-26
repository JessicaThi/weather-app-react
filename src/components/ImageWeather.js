import React from 'react'
import clearIcon from "../assets/images/Clear.png"
import heavyCloudIcon from "../assets/images/HeavyCloud.png"
import lightRainIcon from "../assets/images/LightRain.png"
import thunderstormIcon from "../assets/images/Thunderstorm.png"
import snowIcon from "../assets/images/Snow.png"

export default function ImageWeather(props) {
  let icon;

  if (props.status === "Clear") {
    icon = clearIcon;
  }

  if (props.status === "Clouds") {
    icon = heavyCloudIcon;
  }

  if (props.status === "Rain") {
    icon = lightRainIcon;
  }

  if (props.status === "Thunderstorm") {
    icon = thunderstormIcon;
  }

  if (props.status === "Snow") {
    icon = snowIcon;
  }

  return (
    <img className={props.className} src={icon} alt="icone weather of the day" />
  )
}
