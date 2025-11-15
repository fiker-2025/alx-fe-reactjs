import React from 'react';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipeId);
      if (typeof onDeleted === 'function') onDeleted();
    }
  };

  return (
    <button onClick={handleDelete} className="px-3 py-1 border rounded bg-red-500 text-white">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
