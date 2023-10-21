import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

import styles from "./ingredient.module.css";
import ingredientShape from "propTypes/ingredientShape";
import { setCurrentIngredient } from "services/actions/currentIngredient";
import { dragTypes } from "utils/globalVars";

export default function Ingredient({ ingredient }) {
  const constructorIngredients = useSelector((store) => store.constructorIngredients);
  const dispatch = useDispatch();

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
    <>
      <div className={styles.ingredient} onClick={handleClick} ref={ref}>
        {!!count && <Counter count={count} extraClass="counter" />}
        <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
        <div className={`${styles.price} text text_type_main-medium mt-1 mb-1`}>
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles.name} text text_type_main-small`}>{ingredient.name}</div>
      </div>
    </>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.shape(ingredientShape.isRequired).isRequired,
  handler: PropTypes.func
};
