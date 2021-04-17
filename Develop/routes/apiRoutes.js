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
  });

  res.send(existingNotes);

  //   let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  //   const newNote = req.body;
  //   console.log(newNote);
  //   existingNotes.push(newNote);

  //   fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes), "utf-8");
  //   res.json(existingNotes);
  //   console.log(existingNotes);
});

//Delete Note
router.delete("/:id", (req, res) => {
  let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

  let foundID = req.params.id;
  console.log(foundID);
  // let updatedNotes = existingNotes.filter(
  //   (checkNotes) => checkNotes.id !== foundID
  // );
  existingNotes.forEach((el) => {
    if (foundID === el.id) {
      existingNotes.splice(foundID, 1);
    } else {
      console.log(`ID doesn't exist ${foundID}`);
    }
  });

  //console.log(updatedNotes);
  //existingNotes = updatedNotes;

  fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes), "utf-8");

  res.json(existingNotes);
  console.log(existingNotes);
});

module.exports = router;
//   if (!newNote.name || !newNote.subNote) {
//     return res.status(400).json({ msg: "Please enter a note" });
//   }
