const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const notes = require("../db/db.json");
// const notes = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../db/db.json")),
//   "utf-8"
// );

router.get("/", (req, res) => {
  res.json(notes);
  console.log(notes);
});

module.exports = router;
