import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState<{}>({});

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />

          <CommentCreate postId={post.id} />

          {/* <br /> */}
        </div>
      </div>
    );
  });

  const fetchPost = async () => {
    const res = await axios.get("http://posts.com/posts");
    console.log(res.data);
    setPosts(res.data);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
