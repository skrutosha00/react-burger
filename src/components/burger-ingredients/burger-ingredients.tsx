import styles from "./burger-ingredients.module.css";
import { INGREDIENT_TYPES } from "services/globalVars";
import Tabs from "components/tabs/tabs";
import IngredientType from "components/ingredient-type/ingredient-type";
import { TIngredientType } from "services/types/appTypes";

export default function BurgerIngredients() {
  return (
    <section>
      <h2 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <Tabs />
      <section className={`${styles.ingredients} pl-4 pr-2 custom-scroll`}>
        {(INGREDIENT_TYPES as TIngredientType[]).map((type) => (
          <IngredientType type={type} key={type} />
        ))}
      </section>
    </section>
  );
}
