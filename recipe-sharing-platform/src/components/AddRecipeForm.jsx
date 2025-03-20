import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

function AddRecipeForm() {
  // Access the addRecipe function from the recipe store
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // State variables for form inputs
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({}); // State for form validation errors

  // Default image URL in case no image is provided
  const defaultImageUrl = "https://unsplash.com/photos/hwy3W3qFjgM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8dGhlJTIwdGV4dCUyMHJlY2lwZXxlbnwwfHx8fDE3NDI0ODE5MTF8MA&force=true"; 

  // Function to validate form inputs
  const validateForm = () => {
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required!";
    if (!summary.trim()) tempErrors.summary = "Short description is required!";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required!";
    if (!instructions.trim()) tempErrors.instructions = "Instructions are required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!validateForm()) return; // Stop submission if validation fails

    // Create new recipe object
    const newRecipe = {
      id: Date.now().toString(), // Generate unique ID based on timestamp
      title,
      summary,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert string into an array
      instructions: instructions.split(". ").map((item) => item.trim()), // Convert string into an array
      image: image.trim() || defaultImageUrl, // Use provided image or default
    };

    addRecipe(newRecipe); // Add new recipe to the store
    alert(`🎉 Recipe Added! \n\nTitle: ${title}`); // Show success alert

    // Reset form fields after submission
    setTitle("");
    setSummary("");
    setIngredients("");
    setInstructions("");
    setImage("");
    setErrors({});
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title Input */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Short Description Input */}
        <div>
          <label className="block text-gray-700 font-medium">Short Description:</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Example: Waakye is a classic Ghanaian dish made from rice and beans..."
          ></textarea>
          {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma-separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Example: Flour, Sugar, Eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions Input */}
        <div>
          <label className="block text-gray-700 font-medium">Instructions (separate with a period):</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Example: Preheat oven. Mix ingredients. Bake for 30 minutes."
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Image (Optional):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Paste image URL or leave blank for default"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
