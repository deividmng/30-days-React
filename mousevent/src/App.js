import React, { useState } from 'react';
import './App.css';
import { useMouseCoordinates } from './mouse/mouse';
import { useMouseHandlers } from './mouseHandlers.js/mouse';

function App() {
  const { messages, handleClick, handleDoubleClick, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseOver } = useMouseHandlers();
  const coordinates = useMouseCoordinates();

  const [keyUpMessage, setKeyUpMessage] = useState('');
  
  const handleKeyUp = (event) => {
    setKeyUpMessage(`Key released: ${event.key}`);
  };
  
  // Renderizar el componente
  return (
    <div>
      <header className="">
        {/* Botón con evento onClick */}
        <div >

        <button  onClick={handleClick}>Click me</button>
        <button onDoubleClick={handleDoubleClick}>Double-click me</button>
        <button onMouseDown={handleMouseDown}>Press and hold</button>
        <button onMouseUp={handleMouseUp}>Release me</button>
        <button onMouseMove={handleMouseMove}>Move mouse over me</button>
        <button onMouseEnter={handleMouseEnter}>Mouse entered</button>
        <button onMouseLeave={handleMouseLeave}>Mouse left</button>
        <button onMouseOver={handleMouseOver}>Mouse over me</button>
        </div>

        {/* Mostrar mensajes */}
        <div className='center'>
        {messages.click && <p className="mensaje">{messages.click}</p>}
        </div>
      </header>
      <div  className="full-screen cordinates">
        <p >Mouse Coordinates:   </p>
        
        <p>X: {coordinates.x}</p>
        <p>Y: {coordinates.y}</p>
      </div>
      <input onKeyUp={handleKeyUp} placeholder="Press a key" />
        <p>{keyUpMessage}</p>
    </div>
  );
}

export default App;
