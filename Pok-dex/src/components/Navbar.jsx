function Navbar({pokemonIndex, setPokemonIndex, pokemonList}){

//comportements
const previousHandleClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  console.log(pokemonIndex);
}
const nextHandleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
    console.log(pokemonIndex);
}
//render
return (
    <>
    <div>
      <button onClick={previousHandleClick}>Click</button>
      <button onClick={nextHandleClick}>Click</button>
    </div>

    </>
)
}

export default Navbar