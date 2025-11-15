import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

const Home = () => (
  <div>
    <AddRecipeForm />
    <RecipeList />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="max-w-3xl mx-auto mb-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">Recipe Sharing App</Link>
          <nav>
            <Link to="/" className="px-3 py-1 border rounded">Home</Link>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
            {/* Optionally add 404 route */}
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
