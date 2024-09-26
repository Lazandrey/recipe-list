import { getRecipe } from "../utils/fetches.js";
import { buildRecipe } from "../utils/builders.js";
import { editRecipeEvent, deleteRecipeEvent } from "../utils/events.js";

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

editBtm.addEventListener("click", () => editRecipeEvent(recipeId));

deleteBtm.addEventListener("click", () => deleteRecipeEvent(recipeId, message));

const initApp = async () => {
  const recipe = await getRecipe(recipeId);

  buildRecipe(
    recipe,
    title,
    description,
    directions,
    ingredients,
    difficulty,
    image
  );
};

initApp();
