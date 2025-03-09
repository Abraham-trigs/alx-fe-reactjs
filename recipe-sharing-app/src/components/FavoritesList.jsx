import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  //  Get favorite recipes from Zustand store
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  return (
    <div 
      // styling
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'black',
      }}
    >
      <h2 
        // styling
        style={{ color: '#00ffff' }}
      >
        My Favorites
      </h2>

      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div 
            key={recipe.id}
            // styling
            style={{
              border: '2px solid #00ffff',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 255, 255, 0.1)',
            }}
          >
            <h3 
              // styling
              style={{ color: '#00ffff' }}
            >
              {recipe.title}
            </h3>
            <p 
              // styling
              style={{ color: '#00cccc' }}
            >
              {recipe.description}
            </p>
          </div>
        ))
      ) : (
        <p 
          // styling
          style={{ color: '#888', fontStyle: 'italic' }}
        >
          No favorite recipes yet.
        </p>
      )}
    </div>
  );
};

export default FavoritesList;
