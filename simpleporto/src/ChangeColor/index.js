import React, { useState } from 'react';

const Color = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Estado para el color de fondo

  const handleButtonClick = () => {
    // Genera un color aleatorio para el fondo
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1>Background Color Changer</h1>
      <button onClick={handleButtonClick}>Change Background Color</button>
    </div>
  );
};

export default Color;
