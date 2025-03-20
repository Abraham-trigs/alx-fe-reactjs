import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state

  addRecipe: (newRecipe) =>
    set((state) => ({
      // new recipe to array
      recipes: [...state.recipes, newRecipe], 
    })),

  editRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export default useRecipeStore;
