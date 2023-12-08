import {
  DELETE_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  TDeleteCurrentIngredientAction,
  TSetCurrentIngredientAction,
} from "services/actions/currentIngredient";
import { TIngredient } from "services/types/appTypes";

type TCurrentIngredientState = TIngredient | {};

export type TCurrentIngredientAction =
  | TSetCurrentIngredientAction
  | TDeleteCurrentIngredientAction;

const initialState: TCurrentIngredientState = {};

export default function currentIngredientReducer(
  state = initialState,
  action: TCurrentIngredientAction
): TCurrentIngredientState {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...action.ingredient,
      };
    }
    case DELETE_CURRENT_INGREDIENT: {
      return initialState;
    }
    default:
      return state;
  }
}
