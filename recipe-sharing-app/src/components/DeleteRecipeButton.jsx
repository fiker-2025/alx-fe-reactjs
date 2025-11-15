import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ← REQUIRED by the task

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect to homepage after delete
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
