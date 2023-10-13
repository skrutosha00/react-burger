import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SWITCH_TAB,
  UPDATE_SECTION_VISABILITY
} from "services/actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  visibleSections: {},
  currentTab: "bun"
};

export default function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredients: [],
        ingredientsRequest: false,
        ingredientsFailed: true
      };
    }
    case UPDATE_SECTION_VISABILITY: {
      return {
        ...state,
        visibleSections: { ...state.visibleSections, [action.ingredientType]: action.intersect }
      };
    }
    case SWITCH_TAB: {
      return {
        ...state,
        currentTab: action.tab
      };
    }
    default:
      return state;
  }
}
