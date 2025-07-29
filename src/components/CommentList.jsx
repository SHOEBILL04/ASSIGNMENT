import Comment from './Comment';

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p className="text-sm text-gray-500 mt-2">No comments yet</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
