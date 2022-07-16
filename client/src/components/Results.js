import Card from "./Card.js";
import Details from "./Details.js"

const Results = ({pokemon, images, types, stats, handleChoiceSubmit}) => {
  const pokemonInfo = {
    "name": pokemon,
    "sprites": !images ? null: images.front_default
  }

  return (
    <div>
      <Card images={images} types={types}/>
      <Details stats={stats}/>
      {!stats ? (
        null
      ) : (
        <button value={JSON.stringify(pokemonInfo)} onClick={handleChoiceSubmit}>Add to Team</button>
      )}
    </div>
  )

}

export default Results;