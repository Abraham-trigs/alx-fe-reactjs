import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import fetchUserData from "./services/githubApi";

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
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="message">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
