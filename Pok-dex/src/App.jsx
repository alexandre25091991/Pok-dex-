
import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'


function App() {
    //state
  const [pokemonIndex, setPokemonIndex] = useState(0);

    //comportements
    const previousHandleClick = () => {
        setPokemonIndex(pokemonIndex - 1);
      console.log(pokemonIndex);
    }
    const nextHandleClick = () => {
    setPokemonIndex(pokemonIndex + 1)
    console.log(pokemonIndex);
    }
    //render
  return (
    <>
    <div>
      <PokemonCard  props={pokemonList[pokemonIndex]}/>
    </div>
    <div>
      <button onClick={previousHandleClick}>Click</button>
      <button onClick={nextHandleClick}>Click</button>
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
