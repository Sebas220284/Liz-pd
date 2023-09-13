import React, { useState } from "react";
//import "./NoButton.css"; // Importa los estilos CSS personalizados

function Nobutton({ onNoClick }) {
  const [leftPosition, setLeftPosition] = useState(0);

  const moveNoButton = () => {
    const newPosition = Math.random() * 200; // Cambia esto según tus preferencias
    setLeftPosition(newPosition);
    onNoClick();
  };

  return (
    <button
      onClick={moveNoButton}
      style={{ position: "relative", left: `${leftPosition}px` }}
    >
      No
    </button>
  );
}

export default Nobutton;
