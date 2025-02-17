import React from 'react';
import './SearchInput.css';

const SearchInput: React.FC = () => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search movies..."
      />
    </div>
  );
};

export default SearchInput;
