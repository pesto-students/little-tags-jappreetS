import React from 'react';

import './Pagination.scss';

const Pagination = ({ currentPage, pageCount = 0 }) => {
  return (
    <div className="Pagination d-flex justify-content-center">
      <button
        type="button"
        className={`Pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
      >
        Previous
      </button>
      {!!pageCount &&
        [...Array(pageCount).keys()].map((i) => (
          <button
            key={i}
            type="button"
            className={`Pagination-btn ${
              currentPage === i + 1 ? 'active' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      <button
        type="button"
        className={`Pagination-btn ${
          currentPage === pageCount ? 'disabled' : ''
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
