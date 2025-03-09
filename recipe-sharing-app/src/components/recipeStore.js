import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Store all recipes
  recipes: [],
  // Store user's favorite recipe IDs
  favorites: [],
  // Store recommended recipes
  recommendations: [],
  // Search term for filtering recipes
  searchTerm: '',
  // Filtered recipes based on search
  filteredRecipes: [],
  // Track newly added recipe IDs
  newRecipeIds: [],

  // Set the search term and trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes based on the search term
  filterRecipes: () => {
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    }));
  },

  // Set the entire recipes array
  setRecipes: (newRecipes) => {
    set({
      recipes: newRecipes,
      filteredRecipes: get().searchTerm
        ? newRecipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
          )
        : newRecipes,
    });
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
        newRecipeIds: [...state.newRecipeIds, newRecipe.id],
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

  // Delete a recipe (and remove from favorites if necessary)
  deleteRecipe: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
        newRecipeIds: state.newRecipeIds.filter((recipeId) => recipeId !== id),
        favorites: state.favorites.filter((favId) => favId !== id), // Remove from favorites if deleted
      };
    });
  },

  // Add a recipe to favorites
  addFavorite: (recipeId) => {
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    }));
  },

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  // Generate recommendations based on favorite recipes
  generateRecommendations: () => {
    set((state) => {
      // Suggest recipes that are favorited & use a random selection factor
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    });
  },
}));

export default useRecipeStore;
