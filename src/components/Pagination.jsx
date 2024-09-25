import PropTypes from 'prop-types';

export default function Pagination({ totalPosts, paginate, postsPerPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className='page-item'>
            <a onClick={() => paginate(pageNumber)} href='!#' className='page-link'>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  postsPerPage: PropTypes.number.isRequired, // Add prop type for postsPerPage
};
