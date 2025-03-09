import React from "react";
import { useQuery } from "@tanstack/react-query"; // ✅ Ensure correct import

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  // ✅ Corrected useQuery syntax for React Query v5
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"], // ✅ Array format required
    queryFn: fetchPosts, // ✅ Pass function directly
  });

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
