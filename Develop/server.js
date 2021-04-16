const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const apiRoutes = require("../Develop/routes/apiRoutes");
const htmlRoutes = require("../Develop/routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("api/notes", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
