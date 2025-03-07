import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
const App = () => {
  
  return (
    <>
    <RecipeList />
    <AddRecipeForm />

    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
    </>
  )

};

export default App;
