import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchUserData(query);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">GitHub User Search</h1>
      
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
          Search
        </button>
      </form>

      <SearchResults user={user} loading={loading} error={error} />
    </div>
  );
};

export default SearchBar;
