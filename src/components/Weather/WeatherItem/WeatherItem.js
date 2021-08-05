import React from "react";

import classes from "./WeatherItem.module.css";
import Card from "../../UI/Card";

import ter from "../../../assets/thermometer.png";
import bar from "../../../assets/barometr.png";
import sunset from "../../../assets/sunset.png";
import sunrise from "../../../assets/sunrise.png";
import wind from "../../../assets/wind.png";

const WeatherItem = (props) => {
  let unit;
  if (props.title === "Pressure") {
    unit = <p>hPa</p>;
  } else if (props.title === "Wind") {
    unit = <p>m/s</p>;
  } else if (props.title === "Temperature") {
    unit = <p>&#8451;</p>;
  } else {
    unit = null;
  }

  let icon;
  if (props.title === "Temperature") {
    icon = <img src={ter} alt="Temperature" />;
  } else if (props.title === "Pressure") {
    icon = <img src={bar} alt="Pressure" />;
  } else if (props.title === "Sunset") {
    icon = <img src={sunset} alt="Sunset" />;
  } else if (props.title === "Sunrise") {
    icon = <img src={sunrise} alt="Sunrise" />;
  } else if (props.title === "Wind") {
    icon = <img src={wind} alt="Wind" />;
  }

  return (
    <Card>
      <li className={classes.item}>
        <div>
          <h2>{props.title}</h2>
          <p className={classes.values}>
            {props.value}
            {unit}
          </p>
          {icon}
        </div>
      </li>
    </Card>
  );
};

export default WeatherItem;
