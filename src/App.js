import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";
import First_button from "./components/First_button";
import Button_s from "./components/Button_s";

function App() {
  const [stateCar, changeS] = useState(false);
  const [count, changeC] = useState(0);
  const userName = "Nicolas";
  const user = {
    age: 20,
    color: "Red",
    job: "Student",
  };
  const saludar = (name) => {
    alert(`Hola ${name}`);
  };
  useEffect(() => {
    console.log("total" + count);
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h1>
        <h2>Clicks {count}</h2>
        <Button_s changeS={changeS} changeC={changeC} />
      </header>
    </div>
  );
}

export default App;
