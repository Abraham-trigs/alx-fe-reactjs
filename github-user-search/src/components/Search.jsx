import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, location, minRepos);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-lg bg-gray-800 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search by username..."
          className="px-4 py-2 rounded bg-gray-700 text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (optional)..."
          className="px-4 py-2 rounded bg-gray-700 text-white"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)..."
          className="px-4 py-2 rounded bg-gray-700 text-white"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
