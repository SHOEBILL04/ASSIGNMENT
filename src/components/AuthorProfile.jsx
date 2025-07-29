import { Link } from 'react-router-dom';

const AuthorProfile = ({ author }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <p className="text-gray-600">{author.bio}</p>
        </div>
      </div>
      <div className="flex space-x-4 text-sm">
        <div>
          <span className="font-medium">{author.postsCount}</span>
          <span className="text-gray-500 ml-1">Posts</span>
        </div>
        <div>
          <span className="font-medium">{author.followers}</span>
          <span className="text-gray-500 ml-1">Followers</span>
        </div>
      </div>
      <div className="mt-6">
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          &larr; Back to posts
        </Link>
      </div>
    </div>
  );
};

export default AuthorProfile;
