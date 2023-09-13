import React, { useState } from "react";
import "./App.css";
import Sibutton from "./Sibutton";
import Nobutton from "./Nobutton";

function App() {
  const [showNoButton, setShowNoButton] = useState(true);

  const handleSíClick = () => {
    // Aquí puedes realizar cualquier acción relacionada con el botón "Sí"
    // Por ejemplo, mostrar un mensaje de agradecimiento.
    setShowNoButton(false);
  };

  const handleNoClick = () => {
    // Aquí puedes realizar cualquier acción relacionada con el botón "No"
    // Por ejemplo, moverlo.
  };

  return (
    <div className="App">
      <p>¿Quieres ser mi novia y darme una oportunidad de hacerte muy feliz?</p>
      <Sibutton onSíClick={handleSíClick} />
      {showNoButton && <Nobutton onNoClick={handleNoClick} />}
    </div>
  );
}

export default App;
