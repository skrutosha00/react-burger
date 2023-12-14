import { TConstructorIngredient } from "services/types/appTypes";

export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const MOVE_CONSTRUCTOR_INGREDIENT = "MOVE_CONSTRUCTOR_INGREDIENT";
export const CLEAR_CONSTRUCTOR_INGREDIENTS = "CLEAR_CONSTRUCTOR_INGREDIENTS";

export type TAddConstructorIngredientAction = {
  type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  ingredient: TConstructorIngredient;
};

export type TDeleteConstructorIngredientAction = {
  type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
  ingredient: TConstructorIngredient;
};

export type TMoveConstructorIngredientAction = {
  type: typeof MOVE_CONSTRUCTOR_INGREDIENT;
  dragIndex: number;
  hoverIndex: number;
};

export type TClearConstructorIngredientsAction = {
  type: typeof CLEAR_CONSTRUCTOR_INGREDIENTS;
};

export function addConstructorIngredient(
  ingredient: TConstructorIngredient
): TAddConstructorIngredientAction {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient
  };
}

export function deleteConstructorIngredient(
  ingredient: TConstructorIngredient
): TDeleteConstructorIngredientAction {
  return {
    type: DELETE_CONSTRUCTOR_INGREDIENT,
    ingredient
  };
}

export function moveConstructorIngredient(
  dragIndex: number,
  hoverIndex: number
): TMoveConstructorIngredientAction {
  return {
    type: MOVE_CONSTRUCTOR_INGREDIENT,
    dragIndex,
    hoverIndex
  };
}

export function clearConstructorIngredients(): TClearConstructorIngredientsAction {
  return {
    type: CLEAR_CONSTRUCTOR_INGREDIENTS
  };
}
