import { create } from "zustand";

const getStoredRecipes = () => {
  if (typeof window !== "undefined") { // Ensure localStorage is accessed on the client side
    const storedRecipes = localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  }
  return []; // Return empty array during SSR or if window is undefined
};

const useRecipeStore = create((set) => ({
  recipes: getStoredRecipes(),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      if (typeof window !== "undefined") {
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      }
      return { recipes: updatedRecipes };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      }
      return { recipes: updatedRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      }
      return { recipes: updatedRecipes };
    }),
}));

export default useRecipeStore;
