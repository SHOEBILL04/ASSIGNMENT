import ReactionButtons from './ReactionButtons';

const Comment = ({ comment }) => {
  return (
    <div className="border-l-2 border-gray-200 pl-4 py-2">
      <div className="flex items-center space-x-2">
        <img 
          src={comment.author.avatar} 
          alt={comment.author.name} 
          className="h-8 w-8 rounded-full"
        />
        <div>
          <p className="font-medium text-sm">{comment.author.name}</p>
          <p className="text-xs text-gray-500">{comment.date}</p>
        </div>
      </div>
      <p className="mt-1 text-sm">{comment.content}</p>
      <div className="mt-2">
        <ReactionButtons initialCount={comment.likes} />
      </div>
    </div>
  );
};

export default Comment;
