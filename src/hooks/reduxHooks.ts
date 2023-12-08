import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "services/types/reduxTypes";

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useAppDispatch = () => dispatchHook<AppDispatch>();
