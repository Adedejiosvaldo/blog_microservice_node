const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {});

app.listen(5004, () => {
  console.log("Server is running on port 5004");
});
