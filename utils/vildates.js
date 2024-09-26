const warningMsg = (msg, addOkMsg) => {
  addOkMsg.innerText = msg;
  addOkMsg.classList.add("warning-msg");
};

export const isValidRecipt = (recipe, addOkMsg) => {
  if (recipe.title.length < 3) {
    warningMsg("Title must be at least 3 characters long", addOkMsg);
    return false;
  }
  if (recipe.description.length < 10) {
    warningMsg("Description must be at least 10 characters long", addOkMsg);
    return false;
  }
  if (recipe.instructions.length < 50) {
    warningMsg("Directions must be at least 50 characters long", addOkMsg);
    return false;
  }
  if (recipe.ingredients.length < 50) {
    warningMsg("Ingredients must be at least 50 characters long", addOkMsg);
    return false;
  }

  return true;
};
