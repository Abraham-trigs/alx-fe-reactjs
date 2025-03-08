import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#777' }}>Recipe not found.</p>;
  }

  const handleDelete = () => {
    deleteRecipe(Number(id));
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: '#00ffff' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#ff0000',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          marginTop: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: '0.3s',
        }}
      >
        Delete Recipe
      </button>
      <br />
      <Link to="/" style={{ textDecoration: 'none', color: '#00ffff', marginTop: '10px', display: 'inline-block' }}>
        Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;
