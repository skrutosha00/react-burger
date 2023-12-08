import { TIngredient } from "services/types/appTypes";

export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";
export const DELETE_CURRENT_INGREDIENT = "DELETE_CURRENT_INGREDIENT";

export type TSetCurrentIngredientAction = {
  type: typeof SET_CURRENT_INGREDIENT;
  ingredient: TIngredient;
};

export type TDeleteCurrentIngredientAction = {
  type: typeof DELETE_CURRENT_INGREDIENT;
};

export function setCurrentIngredient(
  ingredient: TIngredient
): TSetCurrentIngredientAction {
  return {
    type: SET_CURRENT_INGREDIENT,
    ingredient,
  };
}

export function deleteCurrentIngredient(): TDeleteCurrentIngredientAction {
  return { type: DELETE_CURRENT_INGREDIENT };
}
