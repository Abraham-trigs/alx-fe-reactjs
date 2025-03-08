import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // ✅ Import SearchBar

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes()); // ✅ Use filtered recipes

  return (
    <div>
      <SearchBar /> {/* ✅ Add SearchBar here */}
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p> // ✅ Show message if no matching recipes
      )}
    </div>
  );
};

export default RecipeList;
