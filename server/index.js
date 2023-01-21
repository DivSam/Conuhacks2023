const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3001;

const uri = "mongodb://localhost:27017";

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
