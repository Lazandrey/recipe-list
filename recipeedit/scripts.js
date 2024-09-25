const params = new URLSearchParams(document.location.search);
const recipeId = params.get("id");

const subminBtn = document.getElementById("submit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const directions = document.getElementById("directions");
const ingredients = document.getElementById("ingredients");
const difficulty = document.getElementById("diff-level");
const image = document.getElementById("image");
const addOkMsg = document.getElementById("ok-message");

const getRecipe = async () => {
  const response = await fetch(
    `https://66ed13e6380821644cdb3c01.mockapi.io/recipe/${recipeId}`
  );
  const data = await response.json();

  return data;
};

const buildRecipe = (recipe) => {
  title.value = recipe.title;
  description.value = recipe.description;
  directions.value = recipe.instructions;
  ingredients.value = recipe.ingredients;
  difficulty.value = recipe.difficulty;
  image.value = recipe.recipe_img;
};

const warningMsg = (msg) => {
  addOkMsg.innerText = msg;
  addOkMsg.classList.add("warning-msg");
};
const validateRecioe = (recipe) => {
  if (recipe.title.length < 3) {
    warningMsg("Title must be at least 3 characters long");
    return false;
  }
  if (recipe.description.length < 10) {
    warningMsg("Description must be at least 10 characters long");
    return false;
  }
  if (recipe.instructions.length < 50) {
    warningMsg("Directions must be at least 50 characters long");
    return false;
  }
  if (recipe.ingredients.length < 50) {
    warningMsg("Ingredients must be at least 50 characters long");
    return false;
  }

  return true;
};

subminBtn.addEventListener("click", async () => {
  const recipe = {
    title: title.value,
    description: description.value,
    instructions: directions.value,
    ingredients: ingredients.value,
    difficulty: difficulty.value,
    recipe_img: image.value,
  };
  if (!validateRecioe(recipe)) {
    return;
  }
  fetch(`https://66ed13e6380821644cdb3c01.mockapi.io/recipe/${recipeId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
    .then((res) => res.json())
    .then((res) => {
      addOkMsg.classList.add("ok-msg");
      addOkMsg.innerText = "Recipe edited ok";

      console.log(res);
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 2000);
    });
});

const startApp = async () => {
  const recipe = await getRecipe();
  buildRecipe(recipe);
};

startApp();
