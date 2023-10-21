export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const DELETE_CURRENT_INGREDIENT = "DELETE_CURRENT_INGREDIENT";

export function setCurrentIngredient(ingredient) {
  return {
    type: SET_CURRENT_INGREDIENT,
    ingredient
  };
}

export function deleteCurrentIngredient() {
  return { type: DELETE_CURRENT_INGREDIENT };
}
