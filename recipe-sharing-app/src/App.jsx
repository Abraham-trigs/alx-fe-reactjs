import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      color: '#00ffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2em', textShadow: '0 0 10px #00ffff' }}>Cyber Recipe Hub</h1>

      {/* Add Recipe Button Positioned Above Search Bar */}
      <AddRecipeForm />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
