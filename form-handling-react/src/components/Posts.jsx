import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const Post = () => {
  // Fetch data using React Query's useQuery hook
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts,
    staleTime: 30000, // Cache data for 30 seconds
  });

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
