import { Action, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TWsOrderAllAction } from "services/actions/ordersAll";
import { TWsProfileOrdersAction } from "services/actions/profileOrders";
import { TAuthAction } from "services/reducers/auth";
import { TConstructorIngredientAction } from "services/reducers/constructorIngredients";
import { TCurrentIngredientAction } from "services/reducers/currentIngredient";
import { TIngredientsAction } from "services/reducers/ingredients";
import { TLoginAction } from "services/reducers/login";
import { TLogoutAction } from "services/reducers/logout";
import { TOrderAction } from "services/reducers/order";
import { TRegisterAction } from "services/reducers/register";
import { TTokenAction } from "services/reducers/token";
import { TUpdateUserAction } from "services/reducers/updateUser";
import { TUserAction } from "services/reducers/user";
import { store } from "services/store";

export type RootState = ReturnType<typeof store.getState>;

export type TAppAction =
  | TAuthAction
  | TConstructorIngredientAction
  | TCurrentIngredientAction
  | TIngredientsAction
  | TLoginAction
  | TLogoutAction
  | TOrderAction
  | TRegisterAction
  | TTokenAction
  | TUpdateUserAction
  | TUserAction
  | TWsOrderAllAction
  | TWsProfileOrdersAction;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppAction>
>;

export type AppDispatch = ThunkDispatch<RootState, never, TAppAction>;

export type TUser = {
  email: string;
  name: string;
};

export type TAuthData = {
  user: TUser;
  refreshToken: string;
  accessToken: string;
};

export type TTokens = Omit<TAuthData, "user">;
