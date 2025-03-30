import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResult";
import { fetchUserData } from "./services/githubApi"; // Fix import

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">GitHub User Search</h1>

      {/* Pass handleSearch as a prop to SearchBar */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading & Error Messages */}
      {loading && <p className="text-white mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display user info using SearchResults */}
      {user && <SearchResults user={user} />}
    </div>
  );
};

export default App;
