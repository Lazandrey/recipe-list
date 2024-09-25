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
  const recipe = {
    title: title.value,
    description: description.value,
    instructions: directions.value,
    ingredients: ingredients.value,
    difficulty: difficulty.value,
    recipe_img: image.value,
  };

  fetch("https://66ed13e6380821644cdb3c01.mockapi.io/recipe", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
    .then((res) => res.json())
    .then((res) => {
      addOkMsg.innerText = "Recipe added ok";
      console.log(res);
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 3000);
    });
});
