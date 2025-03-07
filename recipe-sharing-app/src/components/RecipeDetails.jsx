import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Allows redirecting after delete
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found. It may have been deleted.</p>;
  }

  const handleDelete = () => {
    deleteRecipe(Number(id)); // ✅ Convert id to number
    navigate('/'); // ✅ Redirect to home after delete
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <button onClick={handleDelete}>Delete</button> {/* ✅ Now deletes and redirects */}
      <br />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;





// import { useRecipeStore } from './recipeStore';
// import EditRecipeForm from './EditRecipeForm';
// import DeleteRecipeButton from './DeleteRecipeButton';
// import { useParams, Link } from 'react-router-dom';

// const RecipeDetails = () => {
//   const { id } = useParams(); // ✅ Get recipe ID from URL
//   const recipe = useRecipeStore((state) =>
//     state.recipes.find((recipe) => recipe.id === Number(id)) // ✅ Ensure ID is converted to a number
//   );

//   if (!recipe) {
//     return <p>Recipe not found. It may have been deleted.</p>;
//   }

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>
//       <EditRecipeForm recipe={recipe} />
//       <DeleteRecipeButton recipeId={Number(id)} />
//       <br />
//       <Link to="/">Back to Recipes</Link>
//     </div>
//   );
// };
// export default RecipeDetails;
