import { Link } from 'react-router-dom';
import ReactionButtons from './ReactionButtons';
import CommentList from './CommentList';
import styles from './Post.module.css';

function Post({ post }) {
  return (
    <article className={styles.PostCard}>
      <div className={styles.postContent}>
        <div className={styles.authorInfo}>
          <Link to={`/author/${post.author.id}`} className={styles.authorAvatarLink}>
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className={styles.authorAvatar}
            />
          </Link>
          <div className={styles.authorDetails}>
            <Link
              to={`/author/${post.author.id}`}
              className={styles.authorName}
            >
              {post.author.name}
            </Link>
            <p className={styles.postDate}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        <h2 className={styles.postTitle}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>

        <p className={styles.postExcerpt}>{post.content}</p>

        {/* Tags */}
        <div className={styles.postTags}>
          <span className={styles.postTag}>React</span>
          <span className={styles.postTag}>JavaScript</span>
          <span className={styles.postTag}>Web Dev</span>
        </div>

        <div className={styles.postActions}>
          <ReactionButtons initialCount={post.likes} />
          <CommentList comments={post.comments} />
        </div>
      </div>
    </article>
  );
}

export default Post;