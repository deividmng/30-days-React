import React from 'react';
import './main.css';
import img from '../img/face1.jpg';

const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 0,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',

  }
const Skills = () => {
    return (
      <React.Fragment >
        <div className='Ul'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        </div>
      </React.Fragment>
    )
  }
// Corrige la asignación de valores usando el signo igual (=)
const data = {
   
    firstName: 'David ',
    lastName: 'Exposito ',
  
};

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img className='' src={img} alt={data.firstName} />
    <div>
    {data.firstName}
      {data.lastName}
    </div>
   
  </div>
);

const Main = ({ user, techs, handleTime, greetPeople, changeBackground, addOne, minusOne, count }) => {
  return (
    <main className='white'>
    <p>Prerequisite to get started react.js:</p>
      <Skills></Skills>
      <UserCard user={user} />
      
    </main>
    
  );
};

export default Main;
