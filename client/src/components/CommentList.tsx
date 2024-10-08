const CommentList = ({ comments }: { comments: [string] }) => {
  const renderedPosts = comments.map((comment: any) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedPosts}</ul>;
};

export default CommentList;
