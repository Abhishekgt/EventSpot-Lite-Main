const Pagination = ({ totalPages, currentPage, onPageChange }) => (
   <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
         <button
            key={index}
            className={`pagination-button rounded-full ${index === currentPage ? 'active' : ''}`} // Add rounded-full class
            onClick={() => onPageChange(index)}
         >
            {index + 1}
         </button>
      ))}
   </div>
);

export default Pagination;
