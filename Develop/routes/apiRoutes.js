const fs = require("fs");

const router = require("express").Router();
const notes = require("../db/db.json");

//const allNotes = [notes];

//Gets all notes
router.get("/", (req, res) => {
  res.json(notes);
});

//Create Note
router.post("/", (req, res) => {
  let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  const newNote = req.body;
  console.log(newNote);
  existingNotes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes), "utf-8");
  res.json("test");
  console.log(existingNotes);
});

module.exports = router;
//   if (!newNote.name || !newNote.subNote) {
//     return res.status(400).json({ msg: "Please enter a note" });
//   }
