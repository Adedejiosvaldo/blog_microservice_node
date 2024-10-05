const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();

const post = {
  id: "123",
  title: "Hello",
};

app.get("/posts", (req, res) => {
  res.send(post);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  post[id] = {
    id,
    title,
  };
  res.status(201).send(post[id]);
});

app.listen(5000, () => {
  console.log("Hii");
  console.log("Running on Port 500");
});
