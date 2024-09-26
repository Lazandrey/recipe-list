import { addRecipeEvent } from "../utils/events.js";

const params = new URLSearchParams(document.location.search);
const recipeId = params.get("id");

const subminBtn = document.getElementById("sumnit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const directions = document.getElementById("directions");
const ingredients = document.getElementById("ingredients");
const difficulty = document.getElementById("diff-level");
const image = document.getElementById("image");
const addOkMsg = document.getElementById("ok-message");

subminBtn.addEventListener("click", async () => {
  addRecipeEvent(
    title,
    description,
    directions,
    ingredients,
    difficulty,
    image,
    addOkMsg
  );
});
