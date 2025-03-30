import React from "react";

const SearchResults = ({ user }) => {
  return (
    <div className="search-results">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h3>{user.name || user.login}</h3>
      <p>Public Repos: {user.public_repos}</p>
      <p>Location: {user.location || "Not available"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default SearchResults;
