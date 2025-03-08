import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please enter a title and description!");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description,
    };

    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          padding: '10px',
          width: '80%',
          border: '2px solid #00ffff',
          backgroundColor: 'black',
          color: '#00ffff',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          padding: '10px',
          width: '80%',
          border: '2px solid #00ffff',
          backgroundColor: 'black',
          color: '#00ffff',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
      />
      <button type="submit" style={{
        backgroundColor: '#00ffff',
        color: 'black',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        border: 'none',
        transition: '0.2s ease-in-out',
      }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
