import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ingredient-type.module.css";
import Ingredient from "components/ingredient/ingredient";
import { updateSectionVisability } from "services/actions/ingredients";

const titles = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки"
};

export default function IngredientType({ type }) {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.ingredients);
  const ingredientList = ingredients.filter((ingredient) => ingredient.type === type);

  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(updateSectionVisability(type, inView));
    }
  });

  return (
    <section ref={ref} id={type + "Section"}>
      <h4 className={`text text_type_main-medium mb-6`} id={type}>
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
