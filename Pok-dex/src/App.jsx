
import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'
import { useEffect } from 'react';


function App() {
    //state
  const [pokemonIndex, setPokemonIndex] = useState(0);
    //comportements
    useEffect(
      ()=>{
      alert("Hello Pokemon trainer :))") 
     },
     []
     )
    //render
  return (
    <>
    <div>
      <PokemonCard  props={pokemonList[pokemonIndex]}/>
    </div>
    <div>
    <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
    </div>
    </>
  )};

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];


  
export default App
