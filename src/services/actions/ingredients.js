import fetchJson from "utils/fetchJson";
import { ingredientsUrl } from "utils/globalVars";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const SWITCH_TAB = "SWITCH_TAB";
export const UPDATE_SECTION_VISABILITY = "UPDATE_SECTION_VISABILITY";

export function getIngredients() {
  return async function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    try {
      const response = await fetchJson(ingredientsUrl);
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: response.data
      });
    } catch (err) {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      });
    }
  };
}
