import React from "react";
import classes from "./WeatherOutput.module.css";

import sun from "../../../assets/sunny.png";
import rain from "../../../assets/rain.png";
import snow from "../../../assets/snow.png";
import cloud from "../../../assets/cloudy.png";
import storm from "../../../assets/storm.png";

import WeatherItem from "../WeatherItem/WeatherItem";

const WeatherOutput = (props) => {
  const sunriseTime = new Date(props.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(props.sunset * 1000).toLocaleTimeString();
  const city = props.city;

  const outputArray = [
    {
      id: "o1",
      value: props.wind,
      title: "Wind",
    },
    {
      id: "o2",
      value: props.pressure,
      title: "Pressure",
    },
    {
      id: "o3",
      value: sunriseTime,
      title: "Sunrise",
    },
    {
      id: "o4",
      value: sunsetTime,
      title: "Sunset",
    },
    {
      id: "o5",
      value: props.temp,
      title: "Temperature",
    },
  ];

  let weather;

  if (props.icon === "Clear") {
    weather = sun;
  } else if (props.icon === "Rain") {
    weather = rain;
  } else if (props.icon === "Clouds") {
    weather = cloud;
  } else if (props.icon === "Snow") {
    weather = snow;
  } else if (props.icon === "Storm") {
    weather = storm;
  }

  const weatherItem = outputArray.map((output) => (
    <WeatherItem key={output.id} value={output.value} title={output.title} />
  ));

  return (
    <div className={classes.WeatherOutput}>
      <div className={classes.Info}>
        {props.isError ? props.error : <img src={weather} alt="weather" />}
        <div className={classes.mainInfo}>
          <h1>City: {city.toUpperCase()}</h1>
          <h1>Date: {props.date}</h1>
        </div>
      </div>
      <div>
        <ul>{weatherItem}</ul>
      </div>
    </div>
  );
};

export default WeatherOutput;
