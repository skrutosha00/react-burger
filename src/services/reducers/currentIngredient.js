import { DELETE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from "services/actions/currentIngredient";

const initialState = {};

export default function currentIngredientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT: {
      return {
        ...action.ingredient
      };
    }
    case DELETE_CURRENT_INGREDIENT: {
      return initialState;
    }
    default:
      return state;
  }
}
