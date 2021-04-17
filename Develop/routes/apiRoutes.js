const fs = require("fs");

const router = require("express").Router();
const notes = require("../db/db.json");

//const allNotes = [notes];

//Gets all notes
router.get("/", (req, res) => {
  let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

  res.json(existingNotes);
});

//Create Note
router.post("/", (req, res) => {
  let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  const newNote = req.body;
  console.log(newNote);
  existingNotes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes), "utf-8");
  res.json(existingNotes);
  console.log(existingNotes);
});

//Delete Note
router.delete("/:id", (req, res) => {
  let found = req.params.id;
  let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  let newSavedNotes = filter((existingNotes) => existingNotes !== found);
  existingNotes.push(newSavedNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes), "utf-8");
  res.json(existingNotes);
});

module.exports = router;
//   if (!newNote.name || !newNote.subNote) {
//     return res.status(400).json({ msg: "Please enter a note" });
//   }
