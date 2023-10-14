import fetchJson from "utils/fetchJson";
import { INGREDIENTS_URL } from "utils/globalVars";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const SWITCH_TAB = "SWITCH_TAB";
export const UPDATE_SECTION_VISABILITY = "UPDATE_SECTION_VISABILITY";

export function getIngredientsRequest() {
  return {
    type: GET_INGREDIENTS_REQUEST
  };
}

export function getIngredientsSuccess(ingredients) {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
  };
}

export function getIngredientsFailed() {
  return {
    type: GET_INGREDIENTS_FAILED
  };
}

export function switchTab(tab) {
  return {
    type: SWITCH_TAB,
    tab
  };
}

export function updateSectionVisability(ingredientType, intersect) {
  return {
    type: UPDATE_SECTION_VISABILITY,
    ingredientType,
    intersect
  };
}

export function getIngredients() {
  return async function (dispatch) {
    dispatch(getIngredientsRequest());
    try {
      const response = await fetchJson(INGREDIENTS_URL);
      dispatch(getIngredientsSuccess(response.data));
    } catch (err) {
      dispatch(getIngredientsFailed());
    }
  };
}
