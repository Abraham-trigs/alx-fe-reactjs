import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // Get Zustand function
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required!";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required!";
    if (!steps.trim()) tempErrors.steps = "Preparation steps are required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now().toString(), // Ensure ID is a string for matching
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert to array
      steps: steps.split(". ").map((item) => item.trim()), // Convert to array
      image: "https://via.placeholder.com/150", // Default image
      summary: "User-added recipe",
    };

    addRecipe(newRecipe); // Store recipe in Zustand

    alert(`🎉 Recipe Added! \n\nTitle: ${title}`);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma-separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
            rows="4"
            placeholder="Example: Flour, Sugar, Eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (separate with a period):</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.steps ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
            rows="4"
            placeholder="Example: Preheat oven. Mix ingredients. Bake for 30 minutes."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
