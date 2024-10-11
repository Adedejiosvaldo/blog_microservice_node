const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

const handleEvents = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];

    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);
  res.send({});
});

app.listen(5003, async () => {
  console.log("Server is running on port 5003");
  const res = await axios.get("http://localhost:5002/events");

  for (const events of res.data) {
    console.log("Handling event:", events.type);
    handleEvents(events.type, events.data);
  }
});
