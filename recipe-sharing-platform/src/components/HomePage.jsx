import { Link } from "react-router-dom";
import data from "../data.json"; // Static data
import useRecipeStore from "../store/recipeStore"; // Zustand store

function Homepage() {
  const recipes = useRecipeStore((state) => state.recipes); // Get stored recipes

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Recipe Collection</h1>

      {/* Recipe-Page Button */}
      <Link
        to="/add-recipe"
        className="mb-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition duration-400"
      >
        ➕ Add a Recipe
      </Link>

      {/* Display Static & Added Recipes */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
