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
  const { data: posts, error, isLoading } = useQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts, // Function to fetch posts
  });

  // Show loading state while data is being fetched
  if (isLoading) return <p>Loading posts...</p>;

  // Show error message if fetching fails
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
