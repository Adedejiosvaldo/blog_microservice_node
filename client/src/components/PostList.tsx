import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState<{}>({});

  useEffect(() => {
    fetchPost();
  }, [posts]);

  const renderedPosts = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  console.log(posts);
  const fetchPost = async () => {
    const res = await axios.get("http://localhost:5000/posts");
    setPosts(res.data);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
