import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)} className="mt-2 px-3 py-1 border rounded">Go back</button>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-white">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4 text-gray-800">{recipe.description}</p>

      <div className="flex gap-2">
        <Link to={`/recipes/${id}/edit`} className="px-3 py-1 border rounded bg-blue-500 text-white">Edit</Link>
        <DeleteRecipeButton recipeId={id} onDeleted={() => navigate('/')} />
        <button onClick={() => navigate(-1)} className="px-3 py-1 border rounded">Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
