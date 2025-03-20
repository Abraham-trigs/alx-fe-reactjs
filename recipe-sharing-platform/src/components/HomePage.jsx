import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"; // Import static recipe data
import useRecipeStore from "../store/recipeStore"; // Import Zustand store for state management
import AddRecipeForm from "../components/AddRecipeForm"; // Import the AddRecipeForm component

function Homepage() {
  // State to toggle the add recipe form visibility
  const [showForm, setShowForm] = useState(false);
  
  // Fetch recipes from Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  // Default image URL for recipes without an image
  const defaultImageUrl = "https://unsplash.com/photos/hwy3W3qFjgM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8dGhlJTIwdGV4dCUyMHJlY2lwZXxlbnwwfHx8fDE3NDI0ODE5MTF8MA&force=true"; 

  // Persist recipes in local storage
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]); // Runs whenever recipes change

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Recipe Collection</h1>

      {/* Toggle Button for Add Recipe Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-500"
      >
        {showForm ? "❌ Close Form" : "➕ Add a Recipe"}
      </button>

      {/* Conditional Rendering for Add Recipe Form */}
      <div className={`transition-all duration-700 ease-out ${showForm ? "block" : "hidden"}`}>
        <AddRecipeForm />
      </div>

      {/* Display Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[...data, ...recipes].map((recipe, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
            {/* Recipe Image */}
            <img
              src={recipe.image || defaultImageUrl} // Use provided image or default image
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            
            {/* Recipe Title */}
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">{recipe.title}</h2>
            
            {/* Recipe Summary */}
            <p className="text-gray-600 text-sm mt-1">{recipe.summary || "No summary available."}</p>
            
            {/* View Recipe Button */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
