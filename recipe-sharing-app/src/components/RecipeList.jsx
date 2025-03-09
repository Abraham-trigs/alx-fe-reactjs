import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  // Get filtered recipes and favorites from Zustand store 
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div 
      // styling
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'black',
      }}
    >
      <SearchBar />

      <h2 
        // styling
        style={{ color: '#00ffff', marginBottom: '15px' }}
      >
        Recipes
      </h2>

      <div 
        // styling
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <div
                key={recipe.id}
                // styling
                style={{
                  border: isFavorite ? '2px solid white' : '2px solid #00ffff',
                  padding: '15px',
                  borderRadius: '10px',
                  backgroundColor: 'black',
                  transition: 'transform 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {/* ✅ Recipe title */}
                <h3 
                  // styling
                  style={{ color: '#00ffff', marginBottom: '5px' }}
                >
                  {recipe.title}
                </h3>

                {/* ✅ Recipe description */}
                <p 
                  // styling
                  style={{ fontSize: '14px', color: '#00cccc' }}
                >
                  {recipe.description}
                </p>

                {/* ✅ Favorite Button */}
                <button
                  onClick={() =>
                    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
                  }
                  // styling
                  style={{
                    backgroundColor: isFavorite ? '#ff0000' : '#00ffff',
                    color: 'black',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    border: 'none',
                    fontSize: '14px',
                    transition: '0.3s ease-in-out',
                    marginTop: '10px',
                  }}
                >
                  {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
                </button>

                {/* ✅ Link to view full recipe details */}
                <Link
                  to={`/recipe/${recipe.id}`}
                  // styling
                  style={{
                    textDecoration: 'none',
                    color: '#00ffff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'block',
                    marginTop: '10px',
                  }}
                >
                  View Details
                </Link>
              </div>
            );
          })
        ) : (
          <p 
            // styling
            style={{ color: '#888', fontStyle: 'italic' }}
          >
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
