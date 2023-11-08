import { useInView } from "react-intersection-observer";

import styles from "./ingredient-type.module.css";
import Ingredient from "components/ingredient/ingredient";
import { updateSectionVisability } from "services/actions/ingredients";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { TIngredient, TIngredientType } from "services/types";

const titles = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки"
};

export default function IngredientType({ type }: { type: TIngredientType }) {
  const dispatch = useAppDispatch();
  const { ingredients }: { ingredients: TIngredient[] } = useAppSelector((store) => store.ingredients);
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
          <Ingredient ingredient={ingredient} key={ingredient._id} />
        ))}
      </div>
    </section>
  );
}
