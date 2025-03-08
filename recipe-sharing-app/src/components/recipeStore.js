import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set({ filteredRecipes: get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )});
  },

  // ✅ Store filtered recipes as state so RecipeList updates automatically
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),
}));

export default useRecipeStore;
