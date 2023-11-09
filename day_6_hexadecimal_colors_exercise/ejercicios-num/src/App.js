import './App.css';
import React, { useState, useEffect } from 'react';

function generarNumeroHexadecimalAleatorio() {
  const caracteresHexadecimales = '0123456789ABCDEF';
  let numeroHexadecimal = '#';

  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresHexadecimales.length);
    numeroHexadecimal += caracteresHexadecimales[indiceAleatorio];
  }

  return numeroHexadecimal;
}

function generarColoresAleatorios(cantidad) {
  const colores = [];
  for (let i = 0; i < cantidad; i++) {
    colores.push(generarNumeroHexadecimalAleatorio());
  }
  return colores;
}

function App() {
  const [coloresHexadecimales, setColoresHexadecimales] = useState([]);
  const [botonColor, setBotonColor] = useState(' ');

  useEffect(() => {
    setColoresHexadecimales(generarColoresAleatorios(32));
  }, []);

  const cambiarColor = () => {
    setColoresHexadecimales(generarColoresAleatorios(32));
    setBotonColor(generarNumeroHexadecimalAleatorio()); // Cambia el color del botón al hacer clic
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='text'>
          <h1>30 Days Of React</h1>
          <p>Colores Hexadecimales Generados</p>
        </div>

        <div className="container">
          {coloresHexadecimales.map((color, index) => (
            <div key={index} style={{ backgroundColor: color, color: 'white', paddingTop: '50px', paddingBottom: '50px', margin: '1px', borderRadius: '5px' }}>
              {color}
            </div>
          ))}
        </div>

        <button onClick={cambiarColor} style={{ cursor: 'pointer', backgroundColor: botonColor }}>Generar Nuevos Colores</button>
      </header>
    </div>
  );
}

export default App;
