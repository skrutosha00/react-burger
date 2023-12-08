export const BASE_URL = "https://norma.nomoreparties.space/api";
export const INGREDIENTS_URL = BASE_URL + "/ingredients";
export const ORDER_URL = BASE_URL + "/orders";

export const PASSWORD_FORGOT_URL = BASE_URL + "/password-reset";
export const PASSWORD_RESET_URL = PASSWORD_FORGOT_URL + "/reset";

export const LOGIN_URL = BASE_URL + "/auth/login";
export const REGISTER_URL = BASE_URL + "/auth/register";
export const LOGOUT_URL = BASE_URL + "/auth/logout";
export const TOKEN_URL = BASE_URL + "/auth/token";
export const USER_URL = BASE_URL + "/auth/user";

export const WS_URL = "wss://norma.nomoreparties.space";
export const ORDERS_All_URL = WS_URL + "/orders/all";
export const PROFILE_ORDERS_URL = WS_URL + "/orders";

export const INGREDIENT_TYPES = ["bun", "sauce", "main"];

export const dragTypes = {
  INGREDIENT: "INGREDIENT",
  CONSTRUCTOR_INGREDIENT: "CONSTRUCTOR_INGREDIENT",
};
