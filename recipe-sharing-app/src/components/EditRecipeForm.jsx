import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  // ✅ Show loading message if recipe is not available
  if (!recipe) {
    return (
      <p 
        // styling
        style={{ color: '#888', textAlign: 'center' }}
      >
        Loading recipe...
      </p>
    );
  }

  // ✅ Get update function from store
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');

  // ✅ Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit} 
      // styling
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        // styling
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '2px solid #00ffff',
          backgroundColor: 'black',
          color: '#00ffff',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        rows="4"
        // styling
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '2px solid #00ffff',
          backgroundColor: 'black',
          color: '#00ffff',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
      />
      <button type="submit"
        // styling
        style={{
          backgroundColor: '#00ffff',
          color: 'black',
          padding: '12px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          border: 'none',
          fontSize: '16px',
          transition: '0.3s ease-in-out',
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
