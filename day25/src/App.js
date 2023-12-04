import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaArrowCircleUp } from "react-icons/fa";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gist.githubusercontent.com/JuninhoFreitas/8bf9b82f70383e3a551cc848ce53b06c/raw/796dc4e2fa8db49b981e25fae57d32b52c1d9420/countries.json'
        );

        // Update the state with the response data
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className="countries-wrapper">
      <div className="text-info">
        <h1>World Countries Data</h1>
        <h2>Currently, we have 250 countries</h2>
      </div>

      <div className="controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search countries by name, city and languages"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="arrow-container" onClick={scrollDown}>
        <div className="arrow">
          <FaArrowAltCircleDown />
        </div>
      </div>

      <header className="">
        <div id="countriesContainer" className="container">
          {filteredCountries.map((country, index) => (
            <div key={index} className="card">
              <img className="card-img" src={country.flags.png} alt={country.name} />
              <div className="info">
                <strong>Capital:</strong> {country.capital} <br />
                <strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')} <br />
                <strong>Population:</strong> {country.population} <br />
              </div>
            </div>
          ))}
        </div>
        <div className="arrow-container" onClick={scrollUp}>
        <div className="arrow">
        <FaArrowCircleUp />
        </div>
      </div>
       
      </header>
    </div>
  );
};

export default App;
