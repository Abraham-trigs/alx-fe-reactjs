import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe], // Add new recipe to array
    })),
}));

export default useRecipeStore;
