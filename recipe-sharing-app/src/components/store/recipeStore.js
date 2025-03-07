import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams(); // ✅ Get recipe ID from URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;



// import { create } from 'zustand';

// export const useRecipeStore = create((set) => ({
//   recipes: [
//     { id: 1, title: "Waakye", description: "  Boiled Rice and Beans" },
//     { id: 2, title: "Omo-Tuo", description: "Rice Balls" }
//   ], 
  
//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   setRecipes: (recipes) => set({ recipes }),

//   setRecipe: (id, updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
//       ),
//     })),
// }));

// export default useRecipeStore;
