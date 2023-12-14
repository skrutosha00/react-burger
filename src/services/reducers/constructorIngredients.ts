import {
  ADD_CONSTRUCTOR_INGREDIENT,
  CLEAR_CONSTRUCTOR_INGREDIENTS,
  DELETE_CONSTRUCTOR_INGREDIENT,
  MOVE_CONSTRUCTOR_INGREDIENT,
  TAddConstructorIngredientAction,
  TClearConstructorIngredientsAction,
  TDeleteConstructorIngredientAction,
  TMoveConstructorIngredientAction
} from "services/actions/constructorIngredients";
import { TConstructorIngredient } from "services/types/appTypes";

type TConstructorIngredientState = TConstructorIngredient[];

export type TConstructorIngredientAction =
  | TAddConstructorIngredientAction
  | TDeleteConstructorIngredientAction
  | TMoveConstructorIngredientAction
  | TClearConstructorIngredientsAction;

const initialState: TConstructorIngredientState = [];

export default function constructorIngredientsReducer(
  state = initialState,
  action: TConstructorIngredientAction
): TConstructorIngredientState {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENT: {
      const bunPart = [
        ...state.filter((ingredient) => ingredient.type === "bun")
      ];
      const sortablePart = [
        ...state.filter((ingredient) => ingredient.type !== "bun")
      ];

      if (action.ingredient.type === "bun") {
        return [...sortablePart, action.ingredient];
      }
      return [...sortablePart, action.ingredient, ...bunPart];
    }

    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return state.filter(
        (ingredient) => ingredient.uid !== action.ingredient.uid
      );
    }

    case MOVE_CONSTRUCTOR_INGREDIENT: {
      const ingredients = [...state];
      const draggedIngredient = ingredients[action.dragIndex];
      ingredients.splice(action.dragIndex, 1);
      ingredients.splice(action.hoverIndex, 0, draggedIngredient);
      return ingredients;
    }

    case CLEAR_CONSTRUCTOR_INGREDIENTS: {
      return initialState;
    }

    default:
      return state;
  }
}
