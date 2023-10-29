import { useSelector } from "react-redux";

import styles from "./ingredient-details.module.css";
import IngredientModalInfo from "components/ingredient-details-info/ingredient-details-info";

export default function IngredientDetails() {
  const ingredient = useSelector((store) => store.currentIngredient);

  return (
    <>
      {!!ingredient._id && (
        <section className={styles.detailsSection}>
          <div className={`${styles.title} text text_type_main-large`}>Детали ингредиента</div>
          <div className={`${styles.imageCont} mb-4`}>
            <img src={ingredient.image_large} alt="" className={`${styles.image}`} />
          </div>
          <div className={`${styles.name} text text_type_main-medium mb-8`}>{ingredient.name}</div>
          <div className={`${styles.info} text text_type_main-default text_color_inactive`}>
            <IngredientModalInfo title="Калории, ккал" value={ingredient.calories} />
            <IngredientModalInfo title="Белки, г" value={ingredient.proteins} />
            <IngredientModalInfo title="Жиры, г" value={ingredient.fat} />
            <IngredientModalInfo title="Углеводы, г" value={ingredient.carbohydrates} />
          </div>
        </section>
      )}
    </>
  );
}
