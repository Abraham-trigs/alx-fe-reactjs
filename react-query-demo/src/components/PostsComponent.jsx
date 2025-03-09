// Import necessary dependencies
import { useQuery } from "@tanstack/react-query"; 

// Function to fetch posts using Fetch API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Check if response is OK, otherwise throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json(); // Convert response to JSON
};

const PostsComponent = () => {
  // Using React Query's useQuery hook to fetch and manage posts data
  const { data: posts, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts, // Function to fetch posts
    staleTime: 5000, // Cache posts for 5 seconds before refetching
    cacheTime: 1000 * 60 * 5, // Keep cached data for 5 minutes before garbage collection
    refetchOnWindowFocus: false, // Prevent automatic refetch when switching back to tab
    keepPreviousData: true, // Keep old data while fetching new data
  });

  // Show loading state while data is being fetched
  if (isLoading) return <p>Loading posts...</p>;

  // Show error message if fetching fails
  if (isError) return <p>Error: Failed to fetch posts.</p>; 

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button> {/* Button to manually refresh */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
