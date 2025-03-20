import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json"; // Adjust the path if needed

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-500 font-semibold">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Recipe Container */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        {/* Recipe Title & Summary */}
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2 text-lg">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
          <ul className="bg-gray-50 p-4 rounded-lg shadow-md text-gray-700 space-y-2">
            <li>🍅 Ingredient 1</li>
            <li>🥩 Ingredient 2</li>
            <li>🧄 Ingredient 3</li>
            {/* Replace with actual ingredients */}
          </ul>
        </div>

        {/* Cooking Instructions Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Cooking Instructions</h2>
          <p className="bg-gray-50 p-4 rounded-lg shadow-md text-gray-700">
            Follow the traditional method for cooking <strong>{recipe.title}</strong>.
            More details will be added here.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
