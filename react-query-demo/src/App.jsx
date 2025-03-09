import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import PostsComponent from './components/PostsComponent';
// Initialize QueryClient instance
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
