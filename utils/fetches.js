import fetchLink from "./data.js";

export const getAllRecipes = async () => {
  const response = await fetch(fetchLink);
  const data = await response.json();
  return data;
};

export const deleteRecipe = async (recipeId) => {
  const response = await fetch(fetchLink + "/" + recipeId, {
    method: "DELETE",
  });
  return response;
};

export const getRecipe = async (recipeId) => {
  const response = await fetch(fetchLink + "/" + recipeId);
  const data = await response.json();
  return data;
};

export const addRecipe = async (recipe) => {
  const response = await fetch(fetchLink, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  return response;
};

export const editRecipe = async (recipe, recipeId) => {
  const response = await fetch(fetchLink + "/" + recipeId, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  return response;
};
