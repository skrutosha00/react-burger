import styles from "./burger-ingredients.module.css";
import { INGREDIENT_TYPES } from "utils/globalVars";
import Tabs from "components/tabs/tabs";
import IngredientType from "components/ingredient-type/ingredient-type";

export default function BurgerIngredients() {
  return (
    <section>
      <h2 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <Tabs />
      <section className={`${styles.ingredients} pl-4 pr-2 custom-scroll`}>
        {INGREDIENT_TYPES.map((type) => (
          <IngredientType type={type} key={type} />
        ))}
      </section>
    </section>
  );
}
