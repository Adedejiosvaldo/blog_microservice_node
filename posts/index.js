const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const post = {};

app.get("/posts", (req, res) => {
  res.send(post);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Title is required");
  }

  post[id] = {
    id,
    title,
  };
  res.status(201).json({ id: id, title: title });
});

app.listen(5000, () => {
  console.log("Hii");
  console.log("Running on Port 500");
});
