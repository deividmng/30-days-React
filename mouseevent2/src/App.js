import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    

  useEffect(() => {
    moveButtonRandomly(); // Mover el botón aleatoriamente al cargar el componente
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  const moveButtonRandomly = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Generar posiciones aleatorias
    const newX = Math.random() * (screenWidth - 100); // Restar 100 para evitar que se salga del borde
    const newY = Math.random() * (screenHeight - 50); // Restar 50 para evitar que se salga del borde

    setButtonPosition({ x: newX, y: newY });
    
  };

  const handleMouseMove = () => {
    moveButtonRandomly(); // Mover el botón aleatoriamente cuando se mueve el mouse sobre él
  };

  return (
    <div className="App">
      <header className="App-header">
        <button   onMouseMove={handleMouseMove}
          style={{
            position: 'absolute',
            left: buttonPosition.x,
            top: buttonPosition.y,
          }}className='move'>30 Days Of React</button>
      </header>
    </div>
  );
}

export default App;
