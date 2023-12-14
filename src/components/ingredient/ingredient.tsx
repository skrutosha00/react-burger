import {
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

import styles from "./ingredient.module.css";
import { setCurrentIngredient } from "services/actions/currentIngredient";
import { dragTypes } from "services/globalVars";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  TConstructorIngredient,
  TIngredient,
  TLocation
} from "services/types/appTypes";

export default function Ingredient({
  ingredient
}: {
  ingredient: TIngredient;
}) {
  const constructorIngredients: TConstructorIngredient[] = useAppSelector(
    (store) => store.constructorIngredients
  );
  const location: TLocation = useLocation();
  const dispatch = useAppDispatch();

  const [, ref] = useDrag(() => ({
    type: dragTypes.INGREDIENT,
    item: ingredient
  }));

  const count = constructorIngredients.filter(
    (constructorIngredient) => constructorIngredient._id === ingredient._id
  ).length;

  function handleClick() {
    dispatch(setCurrentIngredient(ingredient));
  }

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      state={{ backgroundLocation: location }}>
      <div className={styles.ingredient} onClick={handleClick} ref={ref}>
        {!!count && <Counter count={count} extraClass="counter" />}
        <img
          className={styles.image}
          src={ingredient.image}
          alt={ingredient.name}
        />
        <div className={`${styles.price} text text_type_main-medium mt-1 mb-1`}>
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles.name} text text_type_main-small`}>
          {ingredient.name}
        </div>
      </div>
    </Link>
  );
}
