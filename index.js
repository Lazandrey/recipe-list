import { getAllRecipes } from "./utils/fetches.js";
import { buildRecipesList } from "./utils/builders.js";
import { changeDifficultyFilter } from "./utils/events.js";
const recipesWrapper = document.getElementById("recipes-wrapper");
const difficulty = document.getElementById("diff-level");

let recipes = [];

difficulty.addEventListener("change", () =>
  changeDifficultyFilter(difficulty, recipesWrapper, recipes)
);

const initApp = async () => {
  recipes = await getAllRecipes();
  buildRecipesList(recipes, recipesWrapper);
};

initApp();
