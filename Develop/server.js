const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
