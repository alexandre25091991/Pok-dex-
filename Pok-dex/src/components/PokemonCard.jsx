import PropTypes from "prop-types";

function PokemonCard({props}) {
    const pokemon=props;
    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc}/><figcaption>{pokemon.name}</figcaption></figure> : <p>{pokemon.name}</p>
    );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
