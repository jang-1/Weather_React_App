import React, { useState } from "react";
import classes from "./WeatherForm.module.css";

const WeatherForm = (props) => {
  const [enteredCity, setEnteredCity] = useState("");

  const cityChangeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredCity.trim() === "") {
      props.onError(true);
    } else {
      props.onError(false);
    }
    props.onChangeCity(enteredCity);
    setEnteredCity("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.Form}>
      <h1>Weather App</h1>
      <input
        onChange={cityChangeHandler}
        className={classes.Input}
        type="text"
        placeholder="Enter a City"
        value={enteredCity}
      />
      <button className={classes.Button}>Enter</button>
    </form>
  );
};

export default WeatherForm;
