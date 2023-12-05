import './style.css'
import React from 'react';
import  img from'./img/face1.jpg'

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

  const data = {
   
      firstName: 'David ',
      lastName: 'Exposito ',
    
  };

  const UserCard = () => (
    <div className='user-card'>
      <img   className='user-card'src={img} alt={data.firstName}  />
    
    </div>
  )
  
const Main = () => {
    return (
      <main className="">
        <div className='AppMain'>
        <h1 className=''>Prere quisite to get startes react.js:</h1>
      <ul>
        <Skills className="Ul"/>
        <UserCard></UserCard>
        <p className='InfoName'>{data.firstName} {data.lastName}</p>
      </ul>
      
        </div>
      </main>
    );
  };
  
  export default Main;
  