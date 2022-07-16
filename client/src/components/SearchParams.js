import { useState } from "react";
import Results from "./Results.js"
import "./styles/SearchParams.css"

const SearchParams = ({ handleChoiceSubmit }) => {
  const [pokemon, setPokemon] = useState('')
  const [stats, setStats] = useState()
  const [images, setImages] = useState()
  const [types, setTypes] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  async function getPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const json = await res.json();
    setStats(json.stats);
    setImages(json.sprites)
    setTypes(json.types)
  }

  return (
    <div className="search-params-container">
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon:
          <input
            type="text"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <Results pokemon={pokemon} images={images} types={types} stats={stats} handleChoiceSubmit={handleChoiceSubmit}/>
    </div>
  )
}

export default SearchParams;