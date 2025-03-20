import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail"; // Ensure this is imported

function App() {
  return (
      <div className="min-h-screen w-full bg-blue-600 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
  );
}

export default App;
