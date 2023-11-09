import React, { Component } from 'react';
import './App.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const tenHighestPopulation = [
  // ... tus datos de población
  // (mismos datos que proporcionaste)
  // ...
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPopulationCountry: tenHighestPopulation.reduce((max, country) => (country.population > max ? country.population : max), 0),
      additionalPopulation: 0,
    };
  }



  

  handleIncreasePopulation = () => {
    // Aumenta la población adicional en 1,000,000 cada vez que se presiona el botón
    this.setState(prevState => ({
      additionalPopulation: prevState.additionalPopulation + 1000000,
      
     
    }));
  };

  handleDecreasePopulation = () => {
    // Disminuye la población adicional en 1,000,000 cada vez que se presiona el botón
    this.setState(prevState => ({
      additionalPopulation: Math.max(prevState.additionalPopulation - 1000000, 0), // Asegura que la población adicional no sea negativa
    }));
  };



  
  render() {
    const time = new Date();
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return (
      <div className="App">
        <div className='info'>    
          <h1>30 Days Of React</h1>
          <h2>{` ${month} ${time} ${date}, ${year} `}</h2>
          <p>Ten most populated countries</p>
        </div>
        <header className="chart">  
          <ul>
            {tenHighestPopulation.map((country, index) => (
              <li key={index}>
                <div className="country-info">
                  <span className="country">{country.country}</span>
                  <div className="bar" style={{ width: `${(country.population / this.state.maxPopulationCountry) * 800 + (this.state.additionalPopulation / this.state.maxPopulationCountry) * 800}px` }}></div>
                  <span className="population">{country.population + this.state.additionalPopulation}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <button className='btn-green' onClick={this.handleIncreasePopulation} >Aumentar Población</button>
            <button className='btn-red' onClick={this.handleDecreasePopulation}>Disminuir Población</button>
          </div>
        </header>
      </div>      
    );
  }
}

export default App;
