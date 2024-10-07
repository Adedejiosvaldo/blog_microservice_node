const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const post = {};

app.get("/posts", (req, res) => {
  res.send(post);
});

app.post("/posts", (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    if (!title) {
      return res.status(400).send("Title is required");
    }

    post[id] = {
      id,
      title,
    };

    axios.post("http://localhost:5002/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).json({ id: id, title: title });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Hii");
  console.log("Running on Port 5000");
});
