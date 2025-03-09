import React from 'react';

// ✅ Import BrowserRouter for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Import components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    // Wrap the app inside Router
    <Router> 
      <div 
        // styling
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
          color: '#00ffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        // App title
        <h1 
          // styling
          style={{ fontSize: '2em', textShadow: '0 0 10px #00ffff' }}
        >
          Cyber Recipe Hub
        </h1>

        // Add Recipe Form
        <AddRecipeForm />

        // Define routes
        <Routes>
          // Recipe list page
          <Route path="/" element={<RecipeList />} />
          
          // Recipe details page
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

// ✅ Export App component
export default App;
