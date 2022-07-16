const express = require("express");
const bodyParser = require('body-parser');
const db = require('../db/db.json');
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Routes
// Get initial team of pokemon from data store
app.get('/pokemon-team/', (req, res) => {
  res.json(db)
})

// Add Pokemon to data store
app.post('/pokemon-team', (req, res) => {
  const dbCopy = [...db];

  if(dbCopy.length < 6) {
    dbCopy.push(req.body);

    fs.writeFileSync(
      "db/db.json",
      JSON.stringify(dbCopy),
      (err) => err && console.error(err)
    );

    res.json({data: dbCopy, message: "POST: Pokemon has been added"})
  } else {
    res.json({data: db, message: "POST: Too many pokemon on team!"})
  }
})

// Delete Pokemon in data store
app.delete('/pokemon-team/', (req, res) => {
  const emptyTeam = [];
  fs.writeFileSync(
    "db/db.json",
    JSON.stringify(emptyTeam),
    (err) => err && console.error(err)
  );

  res.json({data: emptyTeam, message: "DELETE: Pokemon team has been deleted"})

})

app.put('/pokemon-team/:id', (req, res) => {
  const dbCopy = {...db};
  const id = req.body.id.toString();
  const newTeamData = req.body.teamMembers;
  dbCopy[id].teamMembers = newTeamData;

  fs.writeFile(
    "db/db.json",
    JSON.stringify(dbCopy),
    (err) => err && console.error(err)
  );

  res.json({message: "POST: Build your own pokemon team"})
  res.json({message: "PUT: Build your own pokemon team"})
})

