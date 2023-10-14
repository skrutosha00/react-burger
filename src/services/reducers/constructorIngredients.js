import {
  ADD_CONSTRUCTOR_INGREDIENT,
  CLEAR_CONSTRUCTOR_INGREDIENTS,
  DELETE_CONSTRUCTOR_INGREDIENT,
  MOVE_CONSTRUCTOR_INGREDIENT
} from "services/actions/constructorIngredients";

const initialState = [];

export default function constructorIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENT: {
      const bunPart = [...state.filter((ingredient) => ingredient.type === "bun")];
      const sortablePart = [...state.filter((ingredient) => ingredient.type !== "bun")];
      if (action.ingredient.type === "bun") {
        return [...sortablePart, action.ingredient];
      }
      return [...sortablePart, action.ingredient, ...bunPart];
    }

    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return state.filter((ingredient) => ingredient.uid !== action.ingredient.uid);
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
