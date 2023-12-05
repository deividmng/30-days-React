import React, { useState } from 'react';
import './App.css';
import Header from './Header/index';
import Main from './Main/index';

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#60dbfc');
  const [toggleClass, setToggleClass] = useState(true); // Estado para alternar entre class1 y class2
  const [count, setCount] = useState(null);
  const [numberButtonClicked, setNumberButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Cambia entre class1 y class2
    setToggleClass(!toggleClass);
  };

  const handleNumberButtonClick = () => {
    setCount(count + 1);
    setNumberButtonClicked(true);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <header className={`header ${toggleClass ? 'class1' : 'class2'}`}>
        <Header className="" />
      </header>
      <main className={`back ${toggleClass ? 'class3' : 'class2'}`}>
        <Main backgroundColor={backgroundColor} />
      </main>
      {numberButtonClicked && <h1>{count}</h1>}
      <button style={buttonStyles} onClick={handleButtonClick}>
        Change Background
      </button>
      <button style={buttonStyles} onClick={handleNumberButtonClick}>
        Increment Number
      </button>
    </div>

    

    
  );
};

export default App;
