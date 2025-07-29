import { useParams } from 'react-router-dom';
import { authors, posts } from '../data';
import AuthorProfile from '../components/AuthorProfile';
import PostList from '../components/PostList';

const AuthorPage = () => {
  const { id } = useParams();
  const author = authors.find(a => a.id === parseInt(id));
  const authorPosts = posts.filter(post => post.author.id === parseInt(id));

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600">Author not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Author Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-white/20"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{author.name}</h1>
              <p className="text-lg opacity-90 mb-4">{author.bio}</p>
              <div className="flex gap-6">
                <div>
                  <span className="block text-2xl font-bold">{author.postsCount}</span>
                  <span className="text-sm opacity-80">Posts</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{author.followers}</span>
                  <span className="text-sm opacity-80">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Author Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Articles</h2>
          <Link 
            to="/" 
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all posts
          </Link>
        </div>

        {authorPosts.length > 0 ? (
          <PostList posts={authorPosts} />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No posts yet</h3>
            <p className="text-gray-500">This author hasn't published any articles.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AuthorPage;
