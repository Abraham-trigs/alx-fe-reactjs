import { useQuery } from "@tanstack/react-query"; // Import useQuery for data fetching
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  // Fetch posts using React Query
  const { data: posts, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts, 
    staleTime: 5000, // Cache data for 5 seconds before considering it stale
  });

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button> {/* Manual Refetch Button */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
