import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientShape from "../../propTypes/ingredientShape";
import styles from "./constructor-item.module.css";

export default function ConstructorItem({ ingredient, type, isLocked }) {
  return (
    <div className={`${styles.item} ${isLocked ? styles.isLocked : ""}`}>
      {!isLocked && <DragIcon />}

      <ConstructorElement
        isLocked={isLocked}
        price={ingredient.price}
        thumbnail={ingredient.image}
        text={ingredient.name}
        type={type}
        extraClass={styles.constructorElement}
        key={ingredient._id}
      />
    </div>
  );
}

ConstructorItem.propTypes = {
  ingredient: PropTypes.shape(ingredientShape).isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool
};