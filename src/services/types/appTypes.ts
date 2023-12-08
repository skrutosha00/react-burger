import { Location } from "react-router-dom";

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
};

export type TConstructorIngredient = TIngredient & {
  uid: string;
};

export type TIngredientType = "bun" | "main" | "sauce";

export type TLocationState = {
  from: string;
  backgroundLocation: string;
};

export type TLocation = Location<TLocationState>;

export type TWsOrdersAllResponce = {
  success: boolean;
  orders: string[];
  total: number;
  totalToday: number;
};

export type TOrder = {
  _id: string;
  status: "done" | "pending" | "created";
  name: string;
  number: number;
  ingredients: string[];
  createdAt: string;
};

export type TStructureItem = {
  count: number;
  name: string;
  imageLink: string;
  price: number;
  type: string;
};
