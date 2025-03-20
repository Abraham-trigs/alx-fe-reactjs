import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail"; 
import AddRecipePage from './components/AddRecipePage'
function App() {
  return (
      <div className="min-h-screen w-full bg-blue-600 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
        </Routes>
      </div>
  );
}

export default App;
