const CommentList = ({ comments }: { comments: [string] }) => {
  const renderedPosts = comments.map((post: any) => {
    return <li key={post.id}>{post.content}</li>;
  });

  return <ul>{renderedPosts}</ul>;
};

export default CommentList;
