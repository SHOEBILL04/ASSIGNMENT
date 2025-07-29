import { Link, useLocation } from 'react-router-dom';

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
    <div className="flex justify-center mt-12">
      <nav className="flex items-center gap-1">
        {currentPage > 1 && (
          <Link
            to={`${location.pathname}?page=${currentPage - 1}`}
            className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
        
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="h-10 w-10 flex items-center justify-center text-gray-400">...</span>
          ) : (
            <Link
              key={page}
              to={`${location.pathname}?page=${page}`}
              className={`h-10 w-10 flex items-center justify-center rounded-lg border ${
                page === currentPage 
                  ? 'bg-indigo-600 border-indigo-600 text-white' 
                  : 'border-gray-200 hover:bg-gray-50 text-gray-700'
              } transition-colors font-medium`}
            >
              {page}
            </Link>
          )
        ))}
        
        {currentPage < totalPages && (
          <Link
            to={`${location.pathname}?page=${currentPage + 1}`}
            className="flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
