import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages }) => {
  const location = useLocation();
  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);
      
      if (leftBound > 1) {
        pages.push(1);
        if (leftBound > 2) {
          pages.push('...');
        }
      }
      
      for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
      }
      
      if (rightBound < totalPages) {
        if (rightBound < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <nav className={styles.paginationNav}>
        {currentPage > 1 && (
          <Link
            to={`${location.pathname}?page=${currentPage - 1}`}
            className={styles.pageItem}
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        )}

        {getPageNumbers().map((page, index) =>
          page === '...' ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <Link
              key={page}
              to={`${location.pathname}?page=${page}`}
              className={`${styles.pageItem} ${page === currentPage ? styles.activePage : ''}`}
            >
              {page}
            </Link>
          )
        )}

        {currentPage < totalPages && (
          <Link
            to={`${location.pathname}?page=${currentPage + 1}`}
            className={styles.pageItem}
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;