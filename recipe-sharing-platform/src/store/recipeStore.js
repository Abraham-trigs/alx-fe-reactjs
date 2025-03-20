import { create } from "zustand";

// Load recipes from localStorage
const loadRecipesFromStorage = () => {
  const savedRecipes = localStorage.getItem("recipes");
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

const useRecipeStore = create((set) => ({
  recipes: loadRecipesFromStorage(), // Initialize with stored recipes

  // Function to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];

      // Save updated recipes to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),

  // Function to edit an existing recipe
  editRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );

      // Save updated recipes to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),

  // Function to delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);

      // Save updated recipes to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),
}));

export default useRecipeStore;
