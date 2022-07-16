import { useEffect, useState } from "react"
import SearchParams from "./components/SearchParams.js"
import TeamList from "./components/TeamList.js"
import './App.css';

function App() {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    fetch("/pokemon-team/")
      .then((res) => res.json())
      .then((data) => setChoices(data))
  }, [])

  const handleChoiceSubmit = (e) => {
    fetch('/pokemon-team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: e.target.value
    })
    .then(response => response.json())
    .then((data) => setChoices(data.data))
  }

  const handleReset = (e) => {
    fetch("/pokemon-team/", {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((data) => setChoices(data.data))
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Build your own Pokemon team</h1>
        <SearchParams handleChoiceSubmit={handleChoiceSubmit}/>
      </header>
      <TeamList choices={choices} handleReset={handleReset}/>
    </div>
  );
}

export default App;
