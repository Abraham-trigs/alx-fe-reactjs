import React from "react";

const SearchResults = ({ users }) => {
  return (
    <div className="mt-6 grid gap-4 max-w-2xl">
      {users.map((user) => (
        <div key={user.id} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full border-2 border-blue-500" />
          <div className="ml-4">
            <h2 className="text-lg font-bold text-white">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
