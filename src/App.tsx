import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react';


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


function App() {

  const [pokemonName, SetPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <>
      <section>
      <PokemonCard pokemon={pokemon} />
      <button type='button'onClick={() => SetPokemonName("bulbasaur")}>Bulbasaur</button>
      <button type='button' onClick={() => SetPokemonName("mew")}>Mew</button>
      </section>
    </>
  )
}

export default App
