const express = require("express");
const bodyParser = require("body-parser");

const axios = require("axios");
const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  try {
    const events = req.body;
    // Post
    axios.post("http://localhost:5000/events", events).then((response) => {
      console.log(response.data);
    });

    events.push(events);
    // Comment
    axios.post("http://localhost:5001/events", events).then((response) => {
      console.log(response.data);
    });
    // Query Service
    axios.post("http://localhost:5003/events", events).then((response) => {
      console.log(response.data);
    });
    // Moderation
    axios.post("http://localhost:5004/events", events).then((response) => {
      console.log(response.data);
    });
    res.send({ status: "OK" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ status: "Error" });
  }
});

aoo.get("/events", (req, res) => {
  res.send(events);
});

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});
