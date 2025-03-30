const SearchResults = ({ user }) => {
  return (
    <div className="mt-6 bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-4">{user.login}</h2>
      <p className="text-center">{user.bio || "No bio available"}</p>
      <div className="flex justify-center mt-4">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default SearchResults;
