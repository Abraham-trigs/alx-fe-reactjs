import { create } from 'zustand';

const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem('recipes');
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const useRecipeStore = create((set) => ({
  recipes: getStoredRecipes(),

  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    return { recipes: updatedRecipes };
  }),

  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    return { recipes: updatedRecipes };
  }),

  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    return { recipes: updatedRecipes };
  }),
}));

export default useRecipeStore;
