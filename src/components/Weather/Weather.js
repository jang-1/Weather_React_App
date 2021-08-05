import React, { useState, useEffect, useCallback } from "react";
import classes from "./Weather.module.css";

import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherOutput from "./WeatherOutput/WeatherOutput";

const Weather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");

  const cityHandler = (fetchCity) => {
    setCity(fetchCity);
    setIsLoading(true);
  };

  const errorHandler = (isError) => {
    setIsError(isError);
  };

  // In this place you must generate your own API key from site openweathermap.org and assign it to const API. For example: const API = "generated key"

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(API);
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const time = new Date().toLocaleString();

      setDate(time);
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setTemp(data.main.temp);
      setPressure(data.main.pressure);
      setWind(data.wind.speed);
      setIcon(data.weather[0].main);
    } catch (error) {
      setError(error.message);
    }
  }, [API]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const text = isError ? (
    <h1>{error}</h1>
  ) : (
    <h1>Enter a city to check the weather</h1>
  );

  return (
    <div className={classes.Weather}>
      <WeatherForm onChangeCity={cityHandler} onError={errorHandler} />
      {isLoading ? (
        <WeatherOutput
          city={city}
          date={date}
          temp={temp}
          wind={wind}
          sunrise={sunrise}
          sunset={sunset}
          pressure={pressure}
          icon={icon}
          error={error}
          isError={isError}
        />
      ) : (
        <div className={classes.Text}>{text}</div>
      )}
    </div>
  );
};

export default Weather;
