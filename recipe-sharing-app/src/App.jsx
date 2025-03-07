import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import {useRecipeStore} from './components/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  
  return (
    <>
    <RecipeList />
    <AddRecipeForm />
    </>
  );
};

export default App;
