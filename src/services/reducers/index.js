import { combineReducers } from "redux";

import ingredientsReducer from "services/reducers/ingredients";
import constructorIngredientsReducer from "services/reducers/constructorIngredients";
import currentIngredientReducer from "services/reducers/currentIngredient";
import orderReducer from "services/reducers/order";
import authReducer from "services/reducers/auth";
import loginReducer from "services/reducers/login";
import registerReducer from "services/reducers/register";
import logoutReducer from "services/reducers/logout";
import userReducer from "services/reducers/user";
import tokenReducer from "services/reducers/token";
import updateUserReducer from "services/reducers/updateUser";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  user: userReducer,
  token: tokenReducer,
  updateUser: updateUserReducer
});

export default rootReducer;
