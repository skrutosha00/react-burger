import {
  deleteCurrentIngredient,
  setCurrentIngredient
} from "services/actions/currentIngredient";
import currentIngredientReducer from "services/reducers/currentIngredient";

const testCurrentIngredient = {
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
};

describe("currentIngredient reducer", () => {
  it("should return the initial state", () => {
    expect(currentIngredientReducer(undefined, {})).toEqual({});
  });

  it("should handle SET_CURRENT_INGREDIENT", () => {
    expect(
      currentIngredientReducer({}, setCurrentIngredient(testCurrentIngredient))
    ).toEqual(testCurrentIngredient);
  });

  it("should handle DELETE_CURRENT_INGREDIENT", () => {
    expect(currentIngredientReducer({}, deleteCurrentIngredient())).toEqual({});
  });
});
