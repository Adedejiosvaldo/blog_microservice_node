import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const CommentList = ({ postId }: { postId: string }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = posts.map((post: any) => {
    return <li key={post.id}>{post.content}</li>;
  });

  const fetchPost = async () => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    );

    setPosts(res.data);
  };

  return <ul>{renderedPosts}</ul>;
};

export default CommentList;
