import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts } from '../data';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const POSTS_PER_PAGE = 5;

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Discover the latest articles on technology, development, and design
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Latest Posts</h2>
          <div className="relative">
  <select 
    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 transition-all shadow-sm hover:border-gray-400"
    defaultValue="Latest"
    onChange={(e) => {
      // Add your sorting logic here
      console.log("Sort by:", e.target.value);
    }}
  >
    <option value="Latest">Latest</option>
    <option value="Popular">Popular</option>
    <option value="Oldest">Oldest</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </div>
</div>
        </div>

        <PostList posts={paginatedPosts} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>
    </div>
  );
};

export default HomePage;
