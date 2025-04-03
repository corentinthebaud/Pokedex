interface PokemonProps {
  pokemon : {
    name: string;
  imgSrc?: string;
  };
}

/*ou

interface PokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: PokemonProps })*/


function PokemonCard({pokemon}: PokemonProps) {

    return (
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>

    )
};

export default PokemonCard;