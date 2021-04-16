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
  let existingNotes;
  const newNote = req.body;
  console.log(newNote);

  fs.readFile("./db/db.json", function (err, data) {
    if (err) {
      throw err;
    }
    existingNotes = JSON.parse(data);

    existingNotes.push(newNote);
    console.log(existingNotes);

    fs.writeFile("./db/db.json", JSON.stringify(existingNotes), (err) =>
      err ? console.log(err) : console.log("Done")
    );

    //res.json(existingNotes);
  });

  //   if (!newNote.name || !newNote.subNote) {
  //     return res.status(400).json({ msg: "Please enter a note" });
  //   }

  res.json(existingNotes);
  console.log(existingNotes);
});

module.exports = router;
