import './App.scss';
import axios from 'axios';
import { useEffect, useState} from 'react';
import LogoTitle from './logo.svg';
import { FaSearch } from 'react-icons/fa';


function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);
  const [URL, setURL] = useState(""); // Usar setURL para actualizar el estado URL

  useEffect(() => {
    if (URL) {
      axios.get(URL)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setName(response.data.name);
          setWeight(response.data.weight);
        })
        .catch((err) => {
          window.alert(err);
        });
    }
  }, [URL]);


  
  const show = () => {
    // Usar setURL para actualizar el estado URL
    setURL(`https://pokeapi.co/api/v2/pokemon/${number}`);
  }

  return (
    <div >
      <div >
        <div>
      <img src ={LogoTitle} alt='Pokedex' className='imgpoke'/>
        </div>
        
       
      </div>
      <div className='buttom'>

      <input className='input' type={"number,text"} placeholder='  Share for the pokemon' onChange={(e) => { setNumber(e.target.value) }} />
      
      <button className='share' onClick={show}> Search Pokemon</button>
      </div>

 

<div className='container'>
  <div className='pokemon-info'>
  <h2 className='pokemon-name'>Name: {name}</h2>
    <img  className='img-pokemon' src={data ? data.sprites.other.dream_world.front_default : "<p>Loading</p>"} alt="Pokemon" />
    
  </div>

  <div className='abilities'>
    <p>My abilities are:</p>
    {data ? data.abilities.map((value, key) => (
      <div key={key}>{value.ability.name}</div>
    )) : ""}
    <h3>Weight: {weight}</h3>
  </div>
</div>

      
    </div>
  );
}

export default App;
 