import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { fetchUserData } from "./services/githubApi";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="mt-4 text-blue-400">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {user && <SearchResults user={user} />}
    </div>
  );
};

export default App;
