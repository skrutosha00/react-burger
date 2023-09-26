import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientShape from "../../propTypes/ingredientShape";
import styles from "./ingredient.module.css";

export default function Ingredient({ ingredient, count }) {
  return (
    <div className={styles.ingredient}>
      {count && <Counter count={1} extraClass="counter" />}
      <img className={styles.image} src={ingredient.image} alt="" />
      <div className={`${styles.price} text text_type_main-medium mt-1 mb-1`}>
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.name} text text_type_main-small`}>{ingredient.name}</div>
    </div>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.shape(ingredientShape).isRequired,
  count: PropTypes.number
};
