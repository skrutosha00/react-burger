import { combineReducers } from "redux";

import ingredientsReducer from "services/reducers/ingredients";
import constructorIngredientsReducer from "services/reducers/constructorIngredients";
import currentIngredientReducer from "services/reducers/currentIngredient";
import orderReducer from "services/reducers/order";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer
});

export default rootReducer;
