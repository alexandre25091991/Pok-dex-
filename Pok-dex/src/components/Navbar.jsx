function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {

  //comportements
  const handleclick = (pokemon) =>{
    if (pokemon.name ==="bulbasaur"){
      setPokemonIndex(0);
    } else if (pokemon.name ==="charmander"){
      setPokemonIndex(1);
    } else if (pokemon.name ==="squirtle"){
      setPokemonIndex(2);
    } else if (pokemon.name ==="pikachu"){
      setPokemonIndex(3);
    } else if (pokemon ==="mew"){
      setPokemonIndex(4);
    }
  }


  if (pokemonList[pokemonIndex].name === "pikachu") {
    alert("pika pikachu !!!")
  }

  //render
  return (
    <>
      <ul>
        {pokemonList.map((pokemon) => (
          <button onClick={()=>handleclick(pokemon)} key={pokemon.name} id={pokemon.name} >{pokemon.name}</button>
        ))}
      </ul>
    </>
  );
}

export default Navbar