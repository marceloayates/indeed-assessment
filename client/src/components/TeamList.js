import TeamCard from "./TeamCard.js";
import "./styles/TeamList.css";

const TeamList = ({ choices, handleReset }) => {
  return(
    <div className="team-list-container">
      <h2>Team</h2>
      {!choices ? (
        null
      ) : (
        choices.map((choice, index) => (
          <TeamCard choice={choice} key={index}/>
        ))
      )}
      <button id="reset-button" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default TeamList;