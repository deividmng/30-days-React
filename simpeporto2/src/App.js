import React, { useState } from 'react';
import './App.css';
import Header from './Header/header';
import Main from './Main/main';
import Footer from './Footer/footer';

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 0,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
  margin: '3px',
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('class1');
  const [backgroundColor2, setBackgroundColor2] = useState('class2');
  const [count, setCount] = useState(0);


  const showDate = (date) => {
    alert(date);
  };
  
  const handleTime = () => {
    // Lógica para mostrar la hora
    showDate(new Date());
  };
  const greetPeople = () => {
    // Lógica para saludar a las personas
    alert('Welcome to 30 Days Of React Challenge, 2020')
    
  };

  const changeBackground = () => {
    // Lógica para cambiar el fondo
    const newColor = backgroundColor === 'class1' ? 'class2' : 'class1';
    setBackgroundColor(newColor);
  };

  const changeBackground2 = () => {
    // Lógica para cambiar el fondo
    const newColor = backgroundColor2 === 'class4' ? 'class3' : 'class4';
    setBackgroundColor2(newColor);
  };

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  const data = {
    // Define tus datos
  };

  const user = {
    // Define los datos del usuario
  };

  const techs = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div className={`${backgroundColor}`}>
      <Header data={data} />
      <div className={` main-container ${backgroundColor2}`}>
        <Main
          user={user}
          techs={techs}
          handleTime={handleTime}
          greetPeople={greetPeople}
          addOne={addOne}
          minusOne={minusOne}
          count={count}
        />
        <div className='button'>
           <button style={buttonStyles} onClick={() => { greetPeople();}}>
            Greet People
           </button>
           <button style={buttonStyles}  onClick={() => { handleTime();}}>
            Show Time
           </button>
           <button style={buttonStyles} onClick={() => { changeBackground(); changeBackground2(); }}>
            Change Background
           </button>
        </div>
  
      </div>
      <Footer   className={`  ${backgroundColor}`}date={new Date()} />
    </div>
  );
  
};

export default App;
