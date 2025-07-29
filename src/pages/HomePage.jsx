import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts } from '../data';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import styles from './HomePage.module.css';

const POSTS_PER_PAGE = 5;

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Latest');

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // Sort posts based on selected option
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOption === 'Latest') return new Date(b.date) - new Date(a.date);
    if (sortOption === 'Oldest') return new Date(a.date) - new Date(b.date);
    return b.views - a.views; // Popular
  });

  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={styles.heroTitle}>Welcome to Our Blog</h1>
          <p className={styles.heroSubtitle}>
            Discover the latest articles on technology, development, and design
          </p>
          <div className="mt-8">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition-all shadow-md">
              Explore Articles
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        <div className={styles.postsHeader}>
          <h2 className={styles.sectionTitle}>Latest Posts</h2>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              className={styles.sortSelect}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Latest">Latest</option>
              <option value="Popular">Popular</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Post List */}
        <div className="grid gap-8 mb-12">
          <PostList posts={paginatedPosts} />
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest articles and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow max-w-md"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;