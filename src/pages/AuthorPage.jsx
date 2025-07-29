import { useParams, Link } from 'react-router-dom';
import { authors, posts } from '../data';
import PostList from '../components/PostList';
import styles from './AuthorPage.module.css';

const AuthorPage = () => {
  const { id } = useParams();
  const author = authors.find(a => a.id === parseInt(id));
  const authorPosts = posts.filter(post => post.author.id === parseInt(id));

  if (!author) {
    return (
      <div className={styles.notFound}>
        <h1>404 - Author not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Author Header */}
      <header className={styles.authorHeader}>
        <div className={styles.authorContent}>
          <img 
            src={author.avatar}
            alt={author.name}
            className={styles.authorAvatar}
          />
          <div className={styles.authorInfo}>
            <h1 className={styles.authorName}>{author.name}</h1>
            <p className={styles.authorBio}>{author.bio}</p>
            <div className={styles.authorStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{author.postsCount}</span>
                <span className={styles.statLabel}>Posts</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{author.followers}</span>
                <span className={styles.statLabel}>Followers</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Author Posts */}
      <main className={styles.authorPosts}>
        <h2 className={styles.postsTitle}>Articles by {author.name}</h2>
        
        {authorPosts.length > 0 ? (
          <PostList posts={authorPosts} />
        ) : (
          <div className={styles.emptyState}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={styles.emptyIcon}
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9.172 16.172a4 4 0 0 1 5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>
            <h3 className={styles.emptyText}>No posts yet</h3>
            <p>This author hasn't published any articles.</p>
          </div>
        )}

        <Link to="/" className={styles.backLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to all posts
        </Link>
      </main>
    </div>
  );
};

export default AuthorPage;