import {create} from 'zustand'; // ✅ Correct import

const useRecipeStore = create((set) => ({  // ✅ Correct function assignment
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore; // ✅ Correct export
