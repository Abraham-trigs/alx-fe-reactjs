import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail"; 

function App() {
  return (
      // Main container with full-screen height and centered content
      <div className="min-h-screen w-full bg-blue-600 flex justify-center items-center">
        <Routes>
          {/* Route for Homepage */}
          <Route path="/" element={<Homepage />} />
          {/* Route for Recipe Detail Page with dynamic ID */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
  );
}

export default App;
