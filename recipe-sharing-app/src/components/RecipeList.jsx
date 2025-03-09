import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  // ✅ Ensure filteredRecipes and newRecipeIds are properly initialized
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const newRecipeIds = useRecipeStore((state) => state.newRecipeIds) || []; // ✅ Ensure it's always an array

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
        Filtered Recipes
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
        {/* ✅ Display filtered recipes */}
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => {
            const isNewRecipe = newRecipeIds.includes(recipe.id); // ✅ No more "undefined" error
            return (
              <div
                key={recipe.id}
                // styling
                style={{
                  border: isNewRecipe ? '2px solid white' : '2px solid #00ffff',
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

                {/* ✅ Link to view recipe details */}
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
          // ✅ Display message when no recipes match the filters
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
