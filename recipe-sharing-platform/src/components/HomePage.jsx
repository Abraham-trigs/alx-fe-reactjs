import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"; // Static data
import useRecipeStore from "../store/recipeStore"; // Zustand store
import AddRecipeForm from "../components/AddRecipeForm"; // Import Add Recipe Form

function Homepage() {
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const recipes = useRecipeStore((state) => state.recipes); // Get stored recipes

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Recipe Collection</h1>

      {/* Toggle Add Recipe Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-500 ease-out transform hover:scale-110"
      >
        {showForm ? "❌ Close Form" : "➕ Add a Recipe"}
      </button>

      {/* Animated Form (Even Smoother Tailwind Slide-Down) */}
      <div
        className={`transition-[max-height,opacity,transform] duration-700 ease-out overflow-hidden ${
          showForm ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"
        }`}
      >
        <AddRecipeForm />
      </div>

      {/* Display Static & Added Recipes */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[...data, ...recipes].map((recipe, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
            <img
              src={recipe.image || "https://via.placeholder.com/150"} // Default image if none
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{recipe.summary || "No summary available."}</p>

            {/* Link to Recipe Details Page */}
            <Link
              to={`/recipe/${recipe.id || index}`} // Prevent duplicate keys
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
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
