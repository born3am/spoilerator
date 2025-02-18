import React from 'react';
import './SearchInput.css';

const SearchInput: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
const [query, setQuery] = React.useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newQuery = e.target.value;
  setQuery(newQuery);
  onSearch(newQuery);
};

return (
  <div className="searchInput">
    <input
      type="text"
      placeholder="Search movies..."
      className="searchInput__input"
      value={query}
      onChange={handleChange}
    />
  </div>
);
};

export default SearchInput;
