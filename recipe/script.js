// const recipeId = localStorage.getItem("recipeId");
const params = new URLSearchParams(document.location.search);
const recipeId = params.get("id");

const title = document.getElementById("title");
const description = document.getElementById("description");
const directions = document.getElementById("directions");
const ingredients = document.getElementById("ingredients");
const difficulty = document.getElementById("difficulty");
const image = document.getElementById("recipe_img");
const deleteBtm = document.getElementById("delete-recipe");
const editBtm = document.getElementById("edit-recipe");
const message = document.getElementById("message");

const deleteRecipe = async (recipeId) => {
  const response = await fetch(
    `https://66ed13e6380821644cdb3c01.mockapi.io/recipe/${recipeId}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

editBtm.addEventListener("click", () => {
  window.location.href = `../recipeedit/index.html?id=${recipeId}`;
});

deleteBtm.addEventListener("click", async () => {
  const response = await deleteRecipe(recipeId);
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
});
const getRecipe = async () => {
  const response = await fetch(
    `https://66ed13e6380821644cdb3c01.mockapi.io/recipe/${recipeId}`
  );
  const data = await response.json();
  return data;
};

const buildRecipe = (recipe) => {
  title.innerText = recipe.title;
  description.innerText = recipe.description;
  directions.innerText = recipe.instructions;
  ingredients.innerText = recipe.ingredients;
  difficulty.innerText = recipe.difficulty;
  image.src = recipe.recipe_img;

  switch (recipe.difficulty) {
    case "Easy":
      difficulty.classList.add("easy");
      break;
    case "Moderate":
      difficulty.classList.add("moderate");
      break;
    case "Hard":
      difficulty.classList.add("hard");
      break;
  }
};
const startApp = async () => {
  const recipe = await getRecipe();

  buildRecipe(recipe);
};

startApp();
