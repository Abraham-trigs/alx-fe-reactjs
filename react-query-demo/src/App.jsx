// Import necessary dependencies for React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import PostsComponent from './PostsComponent'; // Component to fetch posts

// Initialize a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the application with QueryClientProvider and pass the queryClient instance
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
