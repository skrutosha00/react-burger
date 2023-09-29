import PropTypes from "prop-types";

import data from "../../utils/data.json";
import Ingredient from "../ingredient/ingredient";
import styles from "./ingredient-type.module.css";

const titles = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки"
};

export default function IngredientType({ type }) {
  const ingredientList = data.filter((ingredient) => ingredient.type === type);

  return (
    <section>
      <h4 className={`text text_type_main-medium mb-6`} id={type + "Tab"}>
        {titles[type]}
      </h4>
      <div className={`${styles.ingredients}`}>
        {ingredientList.map((ingredient) => (
          <Ingredient ingredient={ingredient} key={ingredient._id} count={ingredient.price === 1255 ? 1 : undefined} />
        ))}
      </div>
    </section>
  );
}

IngredientType.propTypes = {
  type: PropTypes.string.isRequired
};
