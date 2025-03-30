import React from "react";

const SearchResults = ({ user, loading, error }) => {
  if (loading) return <p className="text-white mt-4">Loading...</p>;
  if (error) return <p className="text-red-500 mt-4">{error}</p>;
  if (!user) return null;

  return (
    <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg text-white text-center w-full max-w-md mx-auto">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto border border-gray-600"
      />
      <h2 className="text-lg font-semibold mt-2">{user.login}</h2>
      {user.name && <p className="text-gray-400">@{user.name}</p>}
      {user.location && <p className="mt-1 text-sm text-gray-400">📍 {user.location}</p>}

      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="text-lg font-bold">{user.public_repos}</p>
          <p className="text-gray-400">Repositories</p>
        </div>
        <div>
          <p className="text-lg font-bold">{user.followers}</p>
          <p className="text-gray-400">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold">{user.following}</p>
          <p className="text-gray-400">Following</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
      >
        View Profile
      </a>
    </div>
  );
};

export default SearchResults;
