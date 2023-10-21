export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const MOVE_CONSTRUCTOR_INGREDIENT = "MOVE_CONSTRUCTOR_INGREDIENT";
export const CLEAR_CONSTRUCTOR_INGREDIENTS = "CLEAR_CONSTRUCTOR_INGREDIENTS";

export function addConstructorIngredient(ingredient) {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient
  };
}

export function deleteConstructorIngredient(ingredient) {
  return {
    type: DELETE_CONSTRUCTOR_INGREDIENT,
    ingredient
  };
}

export function moveConstructorIngredient(dragIndex, hoverIndex) {
  return {
    type: MOVE_CONSTRUCTOR_INGREDIENT,
    dragIndex,
    hoverIndex
  };
}

export function clearConstructorIngredients() {
  return {
    type: CLEAR_CONSTRUCTOR_INGREDIENTS
  };
}
