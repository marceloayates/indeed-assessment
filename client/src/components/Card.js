import "./styles/Card.css"

const Card = ({images, types}) => {

  return (
    <div>
      {!images ? (
        null
      ): (
        <div id="card-container">
          <img src={images.front_default} alt=""/>
          <img src={images.front_shiny} alt=""/>
          {types.map((type, index) => (
            <p key={index}>{type.type.name} </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card;