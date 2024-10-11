const express = require("express");
const bodyParser = require("body-parser");

const axios = require("axios");
const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  try {
    const event = req.body;
    console.log("Event Received:", event.type);
    // Post
    axios.post("http://localhost:5000/events", event).catch((err) => {
      console.log(err.message);
    });

    events.push(event);
    // Comment
    axios.post("http://localhost:5001/events", event).catch((err) => {
      console.log(err.message);
    });
    // Query Service
    axios.post("http://localhost:5003/events", event).catch((err) => {
      console.log(err.message);
    });
    // Moderation
    axios.post("http://localhost:5004/events", event).catch((err) => {
      console.log(err.message);
    });
    res.send({ status: "OK" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ status: "Error" });
  }
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});
