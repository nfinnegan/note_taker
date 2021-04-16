const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const notes = require("../db/db.json");
const uuid = require("uuid");

//const allNotes = [];

//Gets all notes
router.get("/", (req, res) => {
  res.json(notes);
  console.log(notes);
});

//Create Note
router.post("/", (req, res) => {
  const newNote = {
    id: uuid.v4(),
    note: req.body.name,
    subNote: req.body.subNote,
  };

  if (!newNote.name || !newNote.subNote) {
    return res.status(400).json({ msg: "Please enter a note" });
  }
  notes.push(newNote);
  res.json(notes);
});

module.exports = router;
