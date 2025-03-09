import { useQuery } from "@tanstack/react-query";

// Function to fetch posts using the built-in fetch API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json(); // Convert response to JSON
};

const PostsComponent = () => {
  // Fetch posts using React Query
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Error state
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
