import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet!</p>}
      <div className="space-y-4">
        {recipes.map((r) => (
          <div key={r.id} className="p-4 border rounded shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold">{r.title}</h3>
            <p className="text-gray-700 line-clamp-2">{r.description}</p>
            <div className="mt-2 flex gap-2">
              <Link to={`/recipes/${r.id}`} className="text-sm px-2 py-1 border rounded">View</Link>
              <Link to={`/recipes/${r.id}/edit`} className="text-sm px-2 py-1 border rounded">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
