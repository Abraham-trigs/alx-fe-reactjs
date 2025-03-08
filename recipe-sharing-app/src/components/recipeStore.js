import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  newRecipeIds: [], // ✅ Track new recipes

  setSearchTerm: (term) => {
    set({ searchTerm: term });

    // ✅ Ensure filtering updates immediately
    set({
      filteredRecipes: get().recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    });
  },

  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      console.log("Adding recipe:", newRecipe); // ✅ Debugging log
      const updatedRecipes = [...state.recipes, newRecipe];

      return {
        recipes: updatedRecipes,
        filteredRecipes: get().searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
            )
          : updatedRecipes, // ✅ Show all recipes if no search is active
        newRecipeIds: [...state.newRecipeIds, newRecipe.id], // ✅ Track new recipe
      };
    }),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
      newRecipeIds: [], // ✅ Reset new recipe tracking
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: get().searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
            )
          : updatedRecipes, // ✅ Ensure updates reflect in filtered list
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);

      return {
        recipes: updatedRecipes,
        filteredRecipes: get().searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
            )
          : updatedRecipes, // ✅ Keep filtered list updated
        newRecipeIds: state.newRecipeIds.filter((recipeId) => recipeId !== id), // ✅ Remove from new recipe tracking
      };
    }),
}));

export default useRecipeStore;
