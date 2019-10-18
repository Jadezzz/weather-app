import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";

// Glaobal CSS
import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

