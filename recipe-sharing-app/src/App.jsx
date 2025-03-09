import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Removed BrowserRouter
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <div 
      // styling
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        color: '#00ffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* ✅ App title */}
      <h1 
        // styling
        style={{ fontSize: '2em', textShadow: '0 0 10px #00ffff' }}
      >
        Cyber Recipe Hub
      </h1>

      {/* ✅ Add Recipe Form */}
      <AddRecipeForm />

      {/* ✅ Display favorites and recommendations */}
      <FavoritesList />
      <RecommendationsList />


      {/* ✅ Define app routes */}
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;




