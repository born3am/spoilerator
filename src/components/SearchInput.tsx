import { useState } from 'react';
import './SearchInput.css';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
const [query, setQuery] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newQuery = e.target.value;
  setQuery(newQuery);
  onSearch(newQuery);
};

return (
  <div className="searchInput">
    <label htmlFor="searchInput" className="searchInput__label">Search Movies:</label>
    <input
      id="searchInput"
      type="text"
      className="searchInput__input"
      value={query}
      onChange={handleChange}
    />
  </div>
);
};

export default SearchInput;
