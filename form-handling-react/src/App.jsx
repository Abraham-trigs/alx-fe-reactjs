import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Ensure correct import
import PostsComponent from "./components/PostsComponent"; // Ensure correct file path

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    // Wrap the entire app inside QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Example</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
};

export default App;
