import styles from "./ingredient-details.module.css";
import IngredientModalInfo from "components/ingredient-details-info/ingredient-details-info";
import { useAppSelector } from "hooks/reduxHooks";
import { TIngredient } from "services/types/appTypes";

export default function IngredientDetails() {
  const ingredient = useAppSelector(
    (store) => store.currentIngredient
  ) as TIngredient;

  return (
    <>
      {!!Object.keys(ingredient).length && (
        <section className={styles.detailsSection}>
          <div className={`${styles.title} text text_type_main-large`}>
            Детали ингредиента
          </div>
          <div className={`${styles.imageCont} mb-4`}>
            <img
              src={ingredient.image_large}
              alt=""
              className={`${styles.image}`}
            />
          </div>
          <div className={`${styles.name} text text_type_main-medium mb-8`}>
            {ingredient.name}
          </div>
          <div
            className={`${styles.info} text text_type_main-default text_color_inactive`}>
            <IngredientModalInfo
              title="Калории, ккал"
              value={ingredient.calories}
            />
            <IngredientModalInfo title="Белки, г" value={ingredient.proteins} />
            <IngredientModalInfo title="Жиры, г" value={ingredient.fat} />
            <IngredientModalInfo
              title="Углеводы, г"
              value={ingredient.carbohydrates}
            />
          </div>
        </section>
      )}
    </>
  );
}
