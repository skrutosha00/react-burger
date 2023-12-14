import {
  addConstructorIngredient,
  clearConstructorIngredients,
  deleteConstructorIngredient,
  moveConstructorIngredient
} from "services/actions/constructorIngredients";
import constructorIngredientsReducer from "services/reducers/constructorIngredients";

const testConstructorIngredients = [
  {
    uid: "id123",
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
  },
  {
    uid: "id456",
    _id: "id456",
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

describe("constructorIngredients reducer", () => {
  it("should return the initial state", () => {
    expect(constructorIngredientsReducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_CONSTRUCTOR_INGREDIENT", () => {
    expect(
      constructorIngredientsReducer(
        [],
        addConstructorIngredient(testConstructorIngredients[0])
      )
    ).toEqual([testConstructorIngredients[0]]);
  });

  it("should handle DELETE_CONSTRUCTOR_INGREDIENT", () => {
    expect(
      constructorIngredientsReducer(
        [],
        deleteConstructorIngredient(testConstructorIngredients[0])
      )
    ).toEqual([]);
  });

  it("should handle MOVE_CONSTRUCTOR_INGREDIENT", () => {
    expect(
      constructorIngredientsReducer(
        [testConstructorIngredients[0], testConstructorIngredients[1]],
        moveConstructorIngredient(0, 1)
      )
    ).toEqual([testConstructorIngredients[1], testConstructorIngredients[0]]);
  });

  it("should handle CLEAR_CONSTRUCTOR_INGREDIENTS", () => {
    expect(
      constructorIngredientsReducer(
        testConstructorIngredients,
        clearConstructorIngredients()
      )
    ).toEqual([]);
  });
});
