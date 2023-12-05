// App.jsx

import './App.css';
import React, { useState, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';

// Componente de Mensaje Emergente
const PopupMessage = ({ message }) => {
  return <div className="popup-message">{message}</div>;
};

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
  const [cantidadColores, setCantidadColores] = useState(17);
  const [copiado, setCopiado] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [inputCantidad, setInputCantidad] = useState('');

  useEffect(() => {
    setColoresHexadecimales(generarColoresAleatorios(cantidadColores));
  }, [cantidadColores]);

  const cambiarColor = () => {
    const cantidad = parseInt(inputCantidad, 10);
    if (!isNaN(cantidad) && cantidad > 0 && cantidad <= 999) {
      setColoresHexadecimales(generarColoresAleatorios(cantidad));
      setBotonColor(generarNumeroHexadecimalAleatorio());
    }
  };

  const handleCantidadChange = (e) => {
    const inputValue = e.target.value;
    // Validar que solo sean números y el máximo sea 100
    const numeros = /^[0-9]+$/;
    if (inputValue.match(numeros) || inputValue === '' || inputValue === '0') {
      setInputCantidad(inputValue);
    }
  };

  const copiarColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopiado(true);
    setPopupMessage(`Color ${color} copiado`);
    setTimeout(() => {
      setCopiado(false);
      setPopupMessage('');
    }, 1500); // Oculta el mensaje después de 1.5 segundos
  };

  const mostrarMensaje = (color) => {
    setHoveredColor(color);
    setPopupMessage(`¿Quieres copiar el color ${color}?`);
  };

  const ocultarMensaje = () => {
    setHoveredColor(null);
    setPopupMessage('');
  };

  return (
    <div className="color-app">
      <header className="">
        <div className='text'>
          <h1>30 Days Of React</h1>
          <p>Colores Hexadecimales Generados</p>
        </div>

       
        <div className='color-generator-row'>
          <input
            type="text"
            placeholder="Ingresa la cantidad "
            value={inputCantidad}
            onChange={handleCantidadChange}
            maxLength="3" // Limita la longitud a 3 caracteres
          />
          <button onClick={cambiarColor} className='btn-generate'>
            Generar Nuevos Colores
          </button>
        </div>
        <div className="colors-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
          
          
          {coloresHexadecimales.map((color, index) => (
            <div  className='color'
              key={index}
             
              style={{ backgroundColor: color, color: 'white', padding: '40px', margin: '10px', borderRadius: '10px', position: 'relative' }}
              onMouseEnter={() => mostrarMensaje(color)}
              onMouseLeave={ocultarMensaje}
            >
              
              {copiado && hoveredColor === color && <PopupMessage message={popupMessage} />}
              {hoveredColor === color && <div className="hover-message">Copiar</div>}
              {color}
              <FaCopy onClick={() => copiarColor(color)} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
