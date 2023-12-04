import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Top.scss";

const LanguageGraphBars = ({ languageData }) => {
  return (
    <div className="chart">
      {languageData.map((data, index) => (
        <div key={index} className="country-info">
          <span className="country">{data.language}</span> <br />
          <div
            className="bar"
            style={{ width: `${data.count}%`, height: "20px" }}
          ></div>
          <span className="population">{data.count}</span> <br />
        </div>
      ))}
    </div>
  );
};

const Top10 = () => {
  const [countries, setCountries] = useState([]);
  const [showPopulation, setShowPopulation] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/JuninhoFreitas/8bf9b82f70383e3a551cc848ce53b06c/raw/796dc4e2fa8db49b981e25fae57d32b52c1d9420/countries.json"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const filteredCountries = countries.sort(
    (a, b) => b.population - a.population
  );

  const worldPopulation = 7693165599;

  const topCountries = showPopulation ? filteredCountries.slice(0, 10) : [];
  const getCountryName = (name) => {
    switch (name) {
      case "United States of America":
        return "USA";
      case "Russian Federation":
        return "Russia";
      // Agrega más casos según sea necesario
      default:
        return name;
    }
  };

  const handleShowPopulation = () => {
    setShowPopulation(true);
    setShowLanguage(false);
  };

  const handleShowLanguage = () => {
    setShowPopulation(false);
    setShowLanguage(true);
  };

  return (
    <div className="countries-wrapper1">
      <header className="graphs">
        <h1>
          <div className="text-info-p-l">
            <button className="btn-info" onClick={handleShowPopulation}>
              Population
            </button>
            <button className="btn-info" onClick={handleShowLanguage}>
              Languages
            </button>
          </div>
          <div className="show-population">
            {showPopulation
              ? "10 Most Spoken Languages in the World"
              : "10 Most spoken languages in the world"}
          </div>
        </h1>
      </header>

      {showPopulation && (
        <div className="chart">
          <div className="">
            World: {worldPopulation.toLocaleString()}
          </div>
          {topCountries.length > 0 && (
            <div key={0} className="country-info">
              
              <span className="country">{getCountryName(topCountries[0].name)}</span>{" "}
              <br />
              <div
                className="bar"
                style={{
                  width: `${
                    (worldPopulation / topCountries[0].population) * 60
                  }%`,
                  height: "20px",
                }}
              ></div>
              <span className="population">
                {topCountries[0].population.toLocaleString()}
              </span>{" "}
              <br />
            </div>
          )}
          {topCountries.slice(1).map((country, index) => (
            <div key={index + 1} className="country-info">
              <span className="country">{getCountryName(country.name)}</span>{" "}
              <br />
              <div
                className="bar"
                style={{
                  width: `${
                    (country.population / topCountries[0].population) * 60
                  }%`,
                }}
              ></div>
              <span className="population">
                {country.population.toLocaleString()}
              </span>{" "}
              <br />
            </div>
          ))}
        </div>
      )}

      {showLanguage && (
        <LanguageGraphBars
          languageData={[
            { language: "English", count: 91 },
            { language: "French", count: 45 },
            { language: "Arabic", count: 25 },
            { language: "Spanish", count: 24 },
            { language: "Portuguese", count: 10 },
            { language: "Russian", count: 8 },
            { language: "Dutch", count: 8 },
            { language: "German", count: 7 },
            { language: "Chinese", count: 5 },
            { language: "Serbian", count: 4 },
          ]}
        />
      )}
    </div>
  );
};

export default Top10;
