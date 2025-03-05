import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';


function App() {

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>

      <UserProfile
      name= "Alice" 
      age= "25" 
      bio= "Loves hiking and photography" />

      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
