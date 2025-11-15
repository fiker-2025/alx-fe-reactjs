import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';

function App() {
  return (
    <div>
      <h1>My Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
