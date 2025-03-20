import { create } from "zustand";

// Load recipes from localStorage
const loadRecipesFromStorage = () => {
  const savedRecipes = localStorage.getItem("recipes");
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

const useRecipeStore = create((set) => ({
  recipes: loadRecipesFromStorage(), // Initialize with stored recipes

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];

      // Save to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),

  editRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );

      // Save to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);

      // Save to localStorage
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      return { recipes: updatedRecipes };
    }),
}));

export default useRecipeStore;
