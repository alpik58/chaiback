//console.log("test bhai");


require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/khaike", (req, res) => {
  res.send("khaike pan banaraswala");
});

app.get("/kyushu", (req, res) => {
  res.send("kyushu uni");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
