

function PokemonCard() {
    const pokemon=pokemonList[1];
    console.log(pokemon);
    return (
        
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc}/><figcaption>bulbasaur</figcaption></figure> : <p>{pokemon.name}</p>
        
    );
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;
