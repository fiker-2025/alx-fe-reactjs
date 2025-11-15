import { useRecipeStore } from "../store/recipeStore";
import { Link, useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <p><strong>ID:</strong> {recipe.id}</p>            {/* ← required */}
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>

      {/* Edit Section */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete Button */}
      <DeleteRecipeButton recipeId={recipe.id} />

      <br /><br />
      <Link to="/">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
