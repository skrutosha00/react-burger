import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SWITCH_TAB,
  TGetIngredientsFailedAction,
  TGetIngredientsRequestAction,
  TGetIngredientsSuccessAction,
  TSwitchTabAction,
  TUpdateSectionVisabilityAction,
  UPDATE_SECTION_VISABILITY,
} from "services/actions/ingredients";
import { TIngredient, TIngredientType } from "services/types/appTypes";

type TIngredientsState = {
  ingredients: TIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  visibleSections: { [key in TIngredientType]?: boolean };
  currentTab: TIngredientType;
};

export type TIngredientsAction =
  | TGetIngredientsRequestAction
  | TGetIngredientsFailedAction
  | TGetIngredientsSuccessAction
  | TUpdateSectionVisabilityAction
  | TSwitchTabAction;

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  visibleSections: {},
  currentTab: "bun",
};

export default function ingredientsReducer(
  state = initialState,
  action: TIngredientsAction
): TIngredientsState {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredients: [],
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case UPDATE_SECTION_VISABILITY: {
      return {
        ...state,
        visibleSections: {
          ...state.visibleSections,
          [action.ingredientType]: action.intersect,
        },
      };
    }
    case SWITCH_TAB: {
      return {
        ...state,
        currentTab: action.tab,
      };
    }
    default:
      return state;
  }
}
