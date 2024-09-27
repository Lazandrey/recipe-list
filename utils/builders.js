const getRecipeDifficultyCSSClass = (recipe) => {
  switch (recipe.difficulty) {
    case "Easy":
      return "easy";
      break;
    case "Moderate":
      return "moderate";
      break;
    case "Hard":
      return "hard";
      break;
  }
};
const getRecipeHTML = (recipe) => {
  const recipeCard = document.createElement("a");
  const recipeTitle = document.createElement("h2");
  const recipeDescription = document.createElement("p");
  const recipeDirections = document.createElement("p");
  const recipeIngredients = document.createElement("p");
  const recipeDifficulty = document.createElement("p");
  const recipeImage = document.createElement("img");

  recipeTitle.innerText = recipe.title;
  recipeDescription.innerText = recipe.description;
  recipeDirections.innerText = recipe.instructions;
  recipeIngredients.innerText = recipe.ingredients;
  recipeDifficulty.innerText = recipe.difficulty;
  recipeImage.src = recipe.recipe_img;
  recipeDifficulty.classList.add(getRecipeDifficultyCSSClass(recipe));

  recipeCard.classList.add("recipe");

  recipeCard.href = `./recipe/index.html?id=${recipe.id}`;
  recipeCard.append(recipeTitle);
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const h31 = document.createElement("h3");
  h31.innerText = "Description:";
  div2.append(h31, recipeDescription);
  const h311 = document.createElement("h3");
  h311.innerText = "Difficulty level:";
  div2.append(h311, recipeDifficulty);
  div1.append(div2, recipeImage);
  recipeCard.append(div1);
  const h32 = document.createElement("h3");
  h32.innerText = "Directions:";
  recipeCard.append(h32);

  recipeCard.append(recipeDirections);
  const h33 = document.createElement("h3");
  h33.innerText = "Ingredients:";
  recipeCard.append(h33);

  recipeCard.append(recipeIngredients);

  return recipeCard;
};

export const buildRecipesList = (recipes, recipesWrapper) => {
  recipesWrapper.innerHTML = "";
  recipes.forEach((recipe) => {
    recipesWrapper.append(getRecipeHTML(recipe));
  });
};

export const buildRecipe = (
  recipe,
  title,
  description,
  directions,
  ingredients,
  difficulty,
  image
) => {
  title.innerText = recipe.title;
  description.innerText = recipe.description;
  directions.innerText = recipe.instructions;
  ingredients.innerText = recipe.ingredients;
  difficulty.innerText = recipe.difficulty;
  image.src = recipe.recipe_img;
  difficulty.classList.add(getRecipeDifficultyCSSClass(recipe));
};

export const buildRecipeEdit = (
  recipe,
  title,
  description,
  directions,
  ingredients,
  difficulty,
  image
) => {
  title.value = recipe.title;
  description.value = recipe.description;
  directions.value = recipe.instructions;
  ingredients.value = recipe.ingredients;
  difficulty.value = recipe.difficulty;
  image.value = recipe.recipe_img;
};
