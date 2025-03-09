import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  // Get functions from Zustand store
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes();
  };

  return (
    <div 
      // styling
      style={{
        textAlign: 'center',
        marginBottom: '20px',
        padding: '10px',
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        onChange={handleSearch}
        // styling
        style={{
          width: '80%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '2px solid #00ffff',
          outline: 'none',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          color: '#00ffff',
          transition: '0.3s',
          textAlign: 'center',
        }}
      />
    </div>
  );
};

export default SearchBar;
