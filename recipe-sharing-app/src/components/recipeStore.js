import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Initialize state
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  newRecipeIds: [],

  // Set the search term and trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes based on search term
  filterRecipes: () => {
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    }));
  },

  // Add a new recipe
  addRecipe: (newRecipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];

      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
        newRecipeIds: [...state.newRecipeIds, newRecipe.id], // Track new recipe IDs
      };
    });
  },

  // Update an existing recipe
  updateRecipe: (id, updatedRecipe) => {
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
    });
  },

  // Delete a recipe
  deleteRecipe: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
        newRecipeIds: state.newRecipeIds.filter((recipeId) => recipeId !== id), // Remove from tracking
      };
    });
  },
}));

export default useRecipeStore;
