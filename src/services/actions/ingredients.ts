import fetchJson from "utils/fetchJson";
import { INGREDIENTS_URL } from "services/globalVars";
import { TIngredient, TIngredientType } from "services/types/appTypes";
import { AppDispatch } from "services/types/reduxTypes";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const SWITCH_TAB = "SWITCH_TAB";
export const UPDATE_SECTION_VISABILITY = "UPDATE_SECTION_VISABILITY";

export type TGetIngredientsRequestAction = {
  type: typeof GET_INGREDIENTS_REQUEST;
};

export type TGetIngredientsSuccessAction = {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: TIngredient[];
};

export type TGetIngredientsFailedAction = {
  type: typeof GET_INGREDIENTS_FAILED;
};

export type TSwitchTabAction = {
  type: typeof SWITCH_TAB;
  tab: TIngredientType;
};

export type TUpdateSectionVisabilityAction = {
  type: typeof UPDATE_SECTION_VISABILITY;
  ingredientType: TIngredientType;
  intersect: boolean;
};

export function getIngredientsRequest(): TGetIngredientsRequestAction {
  return {
    type: GET_INGREDIENTS_REQUEST
  };
}

export function getIngredientsSuccess(
  ingredients: TIngredient[]
): TGetIngredientsSuccessAction {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
  };
}

export function getIngredientsFailed(): TGetIngredientsFailedAction {
  return {
    type: GET_INGREDIENTS_FAILED
  };
}

export function switchTab(tab: TIngredientType): TSwitchTabAction {
  return {
    type: SWITCH_TAB,
    tab
  };
}

export function updateSectionVisability(
  ingredientType: TIngredientType,
  intersect: boolean
): TUpdateSectionVisabilityAction {
  return {
    type: UPDATE_SECTION_VISABILITY,
    ingredientType,
    intersect
  };
}

export function getIngredients() {
  return async function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    try {
      const response = await fetchJson(INGREDIENTS_URL);
      dispatch(getIngredientsSuccess(response.data));
    } catch (err) {
      dispatch(getIngredientsFailed());
    }
  };
}
