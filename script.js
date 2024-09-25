const recipesWrapper = document.getElementById("recipes-wrapper");
const difficulty = document.getElementById("diff-level");

let recipes = [];

difficulty.addEventListener("change", async () => {
  if (difficulty.value === "All") {
    recipesWrapper.innerHTML = "";
    buildRecipesList(recipes);
  } else {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.difficulty === difficulty.value
    );
    recipesWrapper.innerHTML = "";
    buildRecipesList(filteredRecipes);
  }
});

const getAllRecipes = async () => {
  const response = await fetch(
    "https://66ed13e6380821644cdb3c01.mockapi.io/recipe"
  );
  const data = await response.json();
  return data;
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

  switch (recipe.difficulty) {
    case "Easy":
      recipeDifficulty.classList.add("easy");
      break;
    case "Moderate":
      recipeDifficulty.classList.add("moderate");
      break;
    case "Hard":
      recipeDifficulty.classList.add("hard");
      break;
  }

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

const buildRecipesList = (recipes) => {
  recipes.forEach((recipe) => {
    recipesWrapper.append(getRecipeHTML(recipe));
  });
};

const startApp = async () => {
  recipes = await getAllRecipes();

  buildRecipesList(recipes);
};

startApp();
