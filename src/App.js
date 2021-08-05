import React from "react";
import weather from "./assets/weather.jpg";
import classes from "./App.module.css";

import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className={classes.App}>
      <img src={weather} alt="tree" />
      <Weather />
    </div>
  );
}

export default App;
