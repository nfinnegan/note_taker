const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Notes API routes
app.use("/api/notes", apiRoutes);

//HTML routes
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
