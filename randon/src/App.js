import React, { useState } from 'react';
import './App.css';
import { countriesData } from './countries';
import Footer from './Footer/Footer'; 

function App() {
  const [randomCountry, setRandomCountry] = useState(null);

  const handleRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const selectedCountry = countriesData[randomIndex];
    setRandomCountry(selectedCountry);
  };

  const data = {
    welcome: '30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    select: 'Select a country for your next holiday',
    author: {
      firstName: 'David ',
      lastName: 'Exposito ',
      date: 'Oct 7, 2020',
    },
  };

  return (
    <div className="">
      <header className="">
        <div className='text'>
          <div className='data'>
            
        <h1>{data.welcome}</h1>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <p>
            {data.author.firstName} {data.author.lastName}
          </p>
          <small>{data.author.date}</small>
          <h3>{data.select}</h3>
          </div>

        </div>
        {randomCountry && (
          <div className="container">
            <div className='center'>
           <img src={randomCountry.flag} alt={`${randomCountry.name} Flag`} />
           <h2>{randomCountry.name}</h2>
            </div>
            <div className="country-info">
            <p className="info-item">Capital: <span style={{ fontSize: '15px', color: 'black' }}>{randomCountry.capital}</span></p>
             <p className="info-item">Lenguajes: <span style={{ fontSize: '15px', color: 'black', }}>{randomCountry.languages.join(', ')}</span> </p>
             <p className="info-item">Población: <span style={{ fontSize: '15px', color: 'black', }}>{randomCountry.population}</span></p>
            <p className="info-item">Moneda: <span style={{ fontSize: '15px', color: 'black', }}>{randomCountry.currency}</span></p>              
              </div>
            </div>
        )}
        <div className="button-container">
        <button className='button' onClick={handleRandomCountry}>Select Country</button>
      </div>
      <Footer />
      </header>
    </div>
    
  );
}

export default App;
