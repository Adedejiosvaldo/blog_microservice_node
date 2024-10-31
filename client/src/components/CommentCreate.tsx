import axios from "axios";
import  { useState } from "react";

const CommentCreate = ({ postId }: { postId: string }) => {
  const [Comment, setComment] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content: Comment,
    });

    setComment("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            type="text"
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            name=""
            id=""
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
