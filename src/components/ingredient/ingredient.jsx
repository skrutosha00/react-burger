import { useState } from "react";
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredient.module.css";
import ingredientShape from "propTypes/ingredientShape";
import IngredientDetails from "components/ingredient-details/ingredient-details";

export default function Ingredient({ ingredient, count }) {
  const [isModalShown, setIsModalShown] = useState(false);

  function clickHandler() {
    setIsModalShown(true);
  }

  return (
    <>
      {isModalShown && <IngredientDetails ingredient={ingredient} handler={setIsModalShown} />}
      <div className={styles.ingredient} onClick={clickHandler}>
        {count && <Counter count={count} extraClass="counter" />}
        <img className={styles.image} src={ingredient.image} alt="" />
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
  count: PropTypes.number,
  handler: PropTypes.func
};
