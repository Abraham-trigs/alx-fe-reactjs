import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Get recommended recipes from Zustand store 
  const recommendations = useRecipeStore((state) => state.recommendations);

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
        Recommended Recipes
      </h2>

      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
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
          No recommendations available.
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
