const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});