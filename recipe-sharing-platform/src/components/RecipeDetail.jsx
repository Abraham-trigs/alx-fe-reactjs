import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import data from "../data.json"; // Static recipes
import useRecipeStore from "../store/recipeStore"; // Zustand store

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // To redirect after deleting
  const { recipes, editRecipe, deleteRecipe } = useRecipeStore((state) => state);
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedIngredients, setEditedIngredients] = useState("");
  const [editedInstructions, setEditedInstructions] = useState("");

  useEffect(() => {
    const foundRecipe = [...data, ...recipes].find(
      (item) => item.id.toString() === id.toString()
    );

    if (foundRecipe) {
      setRecipe(foundRecipe);
      setEditedTitle(foundRecipe.title);
      setEditedIngredients(
        Array.isArray(foundRecipe.ingredients)
          ? foundRecipe.ingredients.join(", ")
          : foundRecipe.ingredients
      );
      setEditedInstructions(
        Array.isArray(foundRecipe.instructions) // Check for "instructions" first (from data.json)
          ? foundRecipe.instructions.join(". ")
          : Array.isArray(foundRecipe.steps) // Check for "steps" (from Zustand store)
          ? foundRecipe.steps.join(". ")
          : foundRecipe.instructions || foundRecipe.steps
      );
    }
  }, [id, recipes]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-500 font-semibold">Recipe not found</p>
      </div>
    );
  }

  const handleSave = () => {
    const updatedRecipe = {
      ...recipe,
      title: editedTitle,
      ingredients: editedIngredients.split(",").map((item) => item.trim()),
      instructions: editedInstructions.split(". ").map((item) => item.trim()), // Save as "instructions"
    };

    editRecipe(updatedRecipe);
    setRecipe(updatedRecipe);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      deleteRecipe(recipe.id);
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Recipe Image */}
        <img
          src={recipe.image || "https://via.placeholder.com/150"}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        {/* Edit Mode */}
        {isEditing ? (
          <div className="mt-4">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
            <textarea
              value={editedIngredients}
              onChange={(e) => setEditedIngredients(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="4"
            />
            <textarea
              value={editedInstructions}
              onChange={(e) => setEditedInstructions(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="4"
            />
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              ✅ Save Changes
            </button>
          </div>
        ) : (
          <>
            {/* Recipe Title & Summary */}
            <h1 className="text-4xl font-bold text-gray-800 mt-4">{recipe.title}</h1>
            <p className="text-gray-600 mt-2 text-lg">{recipe.summary || "No summary available."}</p>

            {/* Ingredients */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
              <ul className="bg-gray-50 p-4 rounded-lg shadow-md text-gray-700 space-y-2">
                {recipe.ingredients && Array.isArray(recipe.ingredients) ? (
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>✅ {ingredient.trim()}</li>
                  ))
                ) : (
                  <li className="text-gray-500">No ingredients available</li>
                )}
              </ul>
            </div>

            {/* Cooking Instructions */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Cooking Instructions</h2>
              <ol className="bg-gray-50 p-4 rounded-lg shadow-md text-gray-700 list-decimal list-inside">
                {recipe.instructions || recipe.steps ? (
                  Array.isArray(recipe.instructions)
                    ? recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
                    : Array.isArray(recipe.steps)
                    ? recipe.steps.map((step, index) => <li key={index}>{step}</li>)
                    : <li>{recipe.instructions || recipe.steps}</li>
                ) : (
                  <li className="text-gray-500">No instructions available</li>
                )}
              </ol>
            </div>

            {/* Edit & Delete Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
              >
                ✏️ Edit Recipe
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                🗑️ Delete Recipe
              </button>
            </div>
          </>
        )}

        {/* Back Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
