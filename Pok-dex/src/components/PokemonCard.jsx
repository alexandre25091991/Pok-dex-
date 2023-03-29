

function PokemonCard({props}) {
    const pokemon=props;
    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc}/><figcaption>bulbasaur</figcaption></figure> : <p>{pokemon.name}</p>
    );
}



export default PokemonCard;
