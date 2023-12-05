import React from 'react'; 


const data = {
  welcome: 'Welcome to 30 Days Of React',
  title: 'Getting Started React',
  subtitle: 'JavaScript Library',
  select: 'Select a country for your next holiday',
  author: {
    firstName: 'David ',
    lastName: 'Exposito ',
  },
};

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();



function Header() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='textW'>{data.welcome}</h1>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <p>
            {data.author.firstName} {data.author.lastName}
          </p>
          <p> 
            {currentDay},{currentMonth + 1}, {currentYear}
          </p>
          
          
         
      </header>
    </div>
  );
}

export default Header;