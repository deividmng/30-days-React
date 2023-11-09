
import './App.css';
import React from 'react';
import Numero from './Numero';

const numeros = Array.from({ length: 32 }, (_, index) => index + 0); // Crear un array del 1 al 31
function App() {
  return (
    <div className='numeros'>

      <div className='text'>
      <h1> 30 Days Of React</h1> 
       <p>Number Generatos</p>
      </div>

      <div className='container'>
      {numeros.map(numero => (
        <Numero key={numero} valor={numero} />
      ))}
    </div>
    </div>
  );
}

export default App;
