import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // ✅ Get function reference
  const recipes = filteredRecipes(); // ✅ Call it outside the hook

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <SearchBar />
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
