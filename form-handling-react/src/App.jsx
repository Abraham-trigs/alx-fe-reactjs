import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent"; // Import posts component

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Advanced React and Authentication in React JS</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
};

export default App;
