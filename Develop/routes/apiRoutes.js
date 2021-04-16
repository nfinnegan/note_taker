const notes = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(notes));
  console.log(notes);
};
