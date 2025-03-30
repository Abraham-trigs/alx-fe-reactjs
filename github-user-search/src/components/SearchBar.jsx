import React, { useState } from "react";
import { fetchUserData } from "../services/githubApi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Search GitHub users..."
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
