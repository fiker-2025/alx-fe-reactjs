import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  // If recipes load later, sync fields
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)} className="mt-2 px-3 py-1 border rounded">Go back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe(id, { title: title.trim(), description: description.trim() });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
