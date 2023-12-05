import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);

    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        setData(response.data);
        setCountry(response.data.country);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      console.log(data);
    };

    fetchData();
  }, [URL]);

  // Function to calculate the average metric weight and life span
  const calculateAverageMetrics = () => {
    if (data.length === 0) {
      return {
        averageWeight: 0,
        averageLifeSpan: 0,
      };
    }

    const totalWeight = data.reduce((sum, cat) => {
      const minWeight = parseFloat(cat.weight.metric.split(' - ')[0]);
      const maxWeight = parseFloat(cat.weight.metric.split(' - ')[1]);
      return sum + (minWeight + maxWeight) / 2;
    }, 0);

    const totalLifeSpan = data.reduce((sum, cat) => {
      const minLifeSpan = parseFloat(cat.life_span.split(' - ')[0]);
      const maxLifeSpan = parseFloat(cat.life_span.split(' - ')[1]);
      return sum + (minLifeSpan + maxLifeSpan) / 2;
    }, 0);

    const averageWeight = totalWeight / data.length;
    const averageLifeSpan = totalLifeSpan / data.length;

    return {
      averageWeight,
      averageLifeSpan,
    };
  };

  const averageMetrics = calculateAverageMetrics();

  

  return (
    <div className="App">
      <h1> 30 Days Of React</h1>
      <h2>Cats  Paradise</h2>
      <h3>There are 67 cat breeds</h3>
      <header className="App-header">
        <p>On average a cat weight about <span className="Weight">{averageMetrics.averageWeight.toFixed(2)}</span></p>
        <p>Kg ans live <span className="Weight"> {averageMetrics.averageLifeSpan.toFixed(2)}</span> years</p>
      </header>
    </div>
  );
}

export default App;
