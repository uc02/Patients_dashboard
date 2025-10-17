import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search...' }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <div className="flex search-bar-container ">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="search-input p-1"
      />
      <button onClick={() => handleChange}>
      <FaSearch className='font-extrabold m-2'/>
      </button>
    </div>
  );
};

export default SearchBar;