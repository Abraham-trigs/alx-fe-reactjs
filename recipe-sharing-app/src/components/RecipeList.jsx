import useRecipeStore from './recipeStore';
import { useState } from 'react';

const RecipeList = () => {
  const { recipes, deleteRecipe, updateRecipe } = useRecipeStore();
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleEdit = (recipe) => {
    setEditingId(recipe.id);
    setEditedTitle(recipe.title);
    setEditedDescription(recipe.description);
  };

  const handleSave = () => {
    updateRecipe({ id: editingId, title: editedTitle, description: editedDescription });
    setEditingId(null);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {editingId === recipe.id ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleEdit(recipe)}>Edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
