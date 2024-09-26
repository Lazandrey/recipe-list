import { buildRecipesList } from "./builders.js";
import { deleteRecipe, addRecipe, editRecipe } from "./fetches.js";
import { isValidRecipt } from "../utils/vildates.js";

export const changeDifficultyFilter = async (
  difficulty,
  recipesWrapper,
  recipes
) => {
  if (difficulty.value === "All") {
    recipesWrapper.innerHTML = "";
    buildRecipesList(recipes, recipesWrapper);
  } else {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.difficulty === difficulty.value
    );
    console.log(filteredRecipes);
    recipesWrapper.innerHTML = "";
    buildRecipesList(filteredRecipes, recipesWrapper);
  }
};

export const editRecipeEvent = (recipeId) => {
  window.location.href = `../recipeedit/index.html?id=${recipeId}`;
};

export const deleteRecipeEvent = async (recipeId, message) => {
  const response = await deleteRecipe(recipeId, message);
  if (response.ok) {
    message.classList.add("ok-message");
    message.innerText = "Recipe deleted successfully";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
  } else {
    message.classList.add("error-message");
    message.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
  }
};

export const addRecipeEvent = async (
  title,
  description,
  directions,
  ingredients,
  difficulty,
  image,
  addOkMsg
) => {
  const recipe = {
    title: title.value,
    description: description.value,
    instructions: directions.value,
    ingredients: ingredients.value,
    difficulty: difficulty.value,
    recipe_img: image.value,
  };
  if (!isValidRecipt(recipe, addOkMsg)) {
    return;
  }
  const response = await addRecipe(recipe);
  if (response.ok) {
    addOkMsg.innerText = "Recipe added ok";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  } else {
    addOkMsg.classList.add("error-message");
    addOkMsg.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
  }
};

export const editRecipeConfirmedEvent = async (
  title,
  description,
  directions,
  ingredients,
  difficulty,
  image,
  addOkMsg,
  recipeId
) => {
  const recipe = {
    title: title.value,
    description: description.value,
    instructions: directions.value,
    ingredients: ingredients.value,
    difficulty: difficulty.value,
    recipe_img: image.value,
  };
  if (!isValidRecipt(recipe, addOkMsg)) {
    return;
  }
  const response = await editRecipe(recipe, recipeId);
  console.log(response);
  if (response.ok) {
    addOkMsg.classList.add("ok-msg");
    addOkMsg.innerText = "Recipe edited ok";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  } else {
    addOkMsg.classList.add("error-message");
    addOkMsg.innerText = `Failed to delete recipe. Error: ${response.statusText}`;
  }
};
