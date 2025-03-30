import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import fetchUserData from "./services/githubApi";


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState({});

  const handleSearch = async (username, location, minRepos) => {
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);
    setLastSearch({ username, location, minRepos });

    try {
      const userData = await fetchUserData(username, location, minRepos);
      if (userData.length === 0) setError("No users found.");
      setUsers(userData);
    } catch (err) {
      setError("Error fetching users. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const newPage = page + 1;
    setPage(newPage);
    setLoading(true);

    try {
      const moreUsers = await fetchUserData(lastSearch.username, lastSearch.location, lastSearch.minRepos, newPage);
      setUsers((prevUsers) => [...prevUsers, ...moreUsers]);
    } catch {
      setError("Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="mt-4 text-blue-400">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {users.length > 0 && <SearchResults users={users} />}

      {users.length > 0 && (
        <button onClick={loadMore} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
