import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from './components/Posts';

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
};

export default App;
