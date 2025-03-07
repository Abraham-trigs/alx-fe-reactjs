export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  setRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;






// import { useParams } from "react-router-dom";
// import { useRecipeStore } from "./recipeStore";
// import EditRecipeForm from "./EditRecipeForm";
// import DeleteRecipeButton from "./DeleteRecipeButton";

// const RecipeDetails = () => {
//   const { id } = useParams(); // ✅ Get recipe ID from URL
//   const recipe = useRecipeStore(state =>
//     state.recipes.find(recipe => recipe.id === Number(id))
//   );

//   if (!recipe) return <p>Recipe not found!</p>;

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>
      
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <EditRecipeForm recipe={recipe} />
//         <DeleteRecipeButton recipeId={recipe.id} />
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;


