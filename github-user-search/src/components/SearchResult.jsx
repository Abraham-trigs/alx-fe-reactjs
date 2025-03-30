import React from "react";

const SearchResults = ({ user }) => {
  return (
    <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg text-white w-full max-w-md">
      <div className="flex items-center">
        <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full border-2 border-blue-500" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-400">@{user.login}</p>
        </div>
      </div>

      <div className="mt-4">
        <p><strong>Location:</strong> {user.location || "Not Available"}</p>
        <p><strong>Public Repos:</strong> {user.public_repos}</p>
        <p><strong>Followers:</strong> {user.followers}</p>
        <p><strong>Following:</strong> {user.following}</p>
      </div>

      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block mt-4 text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
        View Profile
      </a>
    </div>
  );
};

export default SearchResults;
