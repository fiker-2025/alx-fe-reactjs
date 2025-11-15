import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const newRecipe = { id: Date.now().toString(), title: title.trim(), description: description.trim() };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    // navigate to newly created recipe detail (optional)
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
