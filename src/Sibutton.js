import React, { useState } from "react";
import "./App.css"; // Importa los estilos CSS personalizados

function Sibutton({ onSíClick }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    // Realiza cualquier acción necesaria antes de mostrar el mensaje
    // Por ejemplo, mostrar un mensaje de agradecimiento.
    onSíClick();
    setShowMessage(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Sí</button>
      {showMessage && (
        <div className="heart-container">
          <div className="heart" />
          <p>
            Gracias por decir que sí. Quiero hacerte la niña más feliz y te
            amo.
          </p>
        </div>
      )}
    </div>
  );
}

export default Sibutton;
