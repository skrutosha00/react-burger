import {
  getIngredientsFailed,
  getIngredientsRequest,
  getIngredientsSuccess,
  switchTab,
  updateSectionVisability
} from "services/actions/ingredients";
import ingredientsReducer, {
  initialState
} from "services/reducers/ingredients";

const testCurrentIngredients = [
  {
    _id: "id123",
    name: "bun",
    type: "bun",
    proteins: 123,
    fat: 132,
    carbohydrates: 123,
    calories: 123,
    price: 123,
    image: "image",
    image_mobile: "image",
    image_large: "image"
  }
];

describe("ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(ingredientsReducer(initialState, getIngredientsRequest())).toEqual({
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false
    });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      ingredientsReducer(
        initialState,
        getIngredientsSuccess(testCurrentIngredients)
      )
    ).toEqual({
      ...initialState,
      ingredients: testCurrentIngredients
    });
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          ingredients: testCurrentIngredients,
          ingredientsRequest: true
        },
        getIngredientsFailed()
      )
    ).toEqual({
      ...initialState,
      ingredients: [],
      ingredientsFailed: true,
      ingredientsRequest: false
    });
  });

  it("should handle UPDATE_SECTION_VISABILITY", () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          visibleSections: { bun: false }
        },
        updateSectionVisability({ ingredientType: "bun", intersect: true })
      )
    ).toEqual({
      ...initialState,
      visibleSections: { bun: false }
    });
  });

  it("should handle SWITCH_TAB", () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          currentTab: "bun"
        },
        switchTab("main")
      )
    ).toEqual({
      ...initialState,
      currentTab: "main"
    });
  });
});
