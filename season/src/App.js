import React, { Component } from 'react';
import './App.css';
import showDate from './season/seaason';
import getPartOfDay from './time/time';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeason: null,
      currentPartOfDay: null,
      loading: true,
    };
  }

  componentDidMount() {
    // Simulando la carga de datos con un retardo de 2 segundos
    setTimeout(() => {
      const currentSeason = showDate();
      const currentPartOfDay = getPartOfDay();
      this.setState({ currentSeason, currentPartOfDay, loading: false });
    }, 1000);
  }

  
  handleLogin = () => {
    this.setState({ loggedIn: true, loading: true });
    setTimeout(() => {
      const currentSeason = showDate();
      const currentPartOfDay = getPartOfDay();
      this.setState({ currentSeason, currentPartOfDay, loading: false });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ loggedIn: false, loading: true });
    setTimeout(() => {
      this.setState({ currentSeason: null, currentPartOfDay: null, loading: false });
    }, 2000);
  };

  render() {
    const { currentSeason, currentPartOfDay, loading } = this.state;




    return (
      
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p style={{ zIndex: 2 }}>{currentSeason}</p>
            <div className="time-container">
              <div className={`time-text-container ${currentPartOfDay.toLowerCase()}`}>
                <p className="time-text">{currentPartOfDay}</p>
              
              </div>
   
            </div>
            <button className="button" onClick={this.handleLogin}>
            Login
          </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
