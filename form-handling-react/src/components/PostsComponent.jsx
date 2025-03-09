import { useQuery } from "@tanstack/react-query";

// Function to fetch posts using the Fetch API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  // Fetch posts with caching enabled
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // Cache posts for 60 seconds before considering them stale
    refetchOnWindowFocus: false, // Prevent auto refetch when window is focused
  });

  // Show loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Show error state
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      
      {/* Button to manually refresh posts */}
      <button onClick={() => refetch()}>Refresh Posts</button>

      {/* Display all posts */}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
