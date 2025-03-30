import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]); // State to hold repositories
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userResponse.data);

      // Fetch user's repositories
      const reposResponse = await axios.get(userResponse.data.repos_url);
      setRepos(reposResponse.data);
    } catch (err) {
      setError("Looks like we cant find the user");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {user && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto border border-gray-600"
          />
          <h2 className="mt-4 text-xl font-semibold">{user.login}</h2>
          <p className="mt-2">Public Repos: {user.public_repos}</p>
          <p className="mt-2">Location: {user.location || "Not Available"}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Profile
          </a>

          {/* Display list of repositories */}
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold">Repositories:</h3>
            <ul className="mt-2">
              {repos.map((repo) => (
                <li key={repo.id} className="mt-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
