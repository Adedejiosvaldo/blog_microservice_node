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

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }

  console.log(posts);

  res.send({});
});

app.listen(5003, () => {
  console.log("Server is running on port 5003");
});
