import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  // ✅ Get setSearchTerm function from Zustand store
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div 
      // styling
      style={{ textAlign: 'center', marginBottom: '20px', padding: '10px' }}
    >
      <input
        type="text"
        placeholder="🔍 Scan for recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
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
