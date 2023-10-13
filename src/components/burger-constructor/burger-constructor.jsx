import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import { nanoid } from "nanoid";

import styles from "./burger-constructor.module.css";
import { ADD_CONSTRUCTOR_INGREDIENT } from "services/actions/constructorIngredients";
import { dragTypes } from "utils/globalVars";
import ConstructorItem from "components/constructor-item/constructor-item";
import OrderSection from "components/order-section/order-section";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.constructorIngredients);
  const bun = useMemo(() => ingredients.find((ingredient) => ingredient.type === "bun"), [ingredients]);
  const ingredientList = useMemo(() => ingredients.filter((ingredient) => ingredient.type !== "bun"), [ingredients]);

  const [{ isOver }, ref] = useDrop(() => ({
    accept: dragTypes.INGREDIENT,
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    drop(item) {
      dispatch({
        type: ADD_CONSTRUCTOR_INGREDIENT,
        ingredient: { ...item, uid: nanoid() }
      });
    }
  }));

  const style = {
    boxShadow: isOver ? "1px 1px yellow, -1px -1px yellow" : "unset"
  };

  return (
    <section className={`${styles.constructor} pt-25 pl-4`}>
      <div className={styles.ingredients} ref={ref} style={style}>
        {!!ingredients.length && (
          <>
            <div className="mb-4">{bun && <ConstructorItem ingredient={bun} isLocked={true} type="top" />}</div>
            <ul className={`${styles.unlockedItems} custom-scroll`}>
              {ingredientList.map((ingredient, index) => (
                <li key={ingredient.uid}>
                  <ConstructorItem ingredient={ingredient} index={index} isLocked={false} />
                </li>
              ))}
            </ul>
            <div className="mt-4">{bun && <ConstructorItem ingredient={bun} isLocked={true} type="bottom" />}</div>
          </>
        )}
      </div>
      <OrderSection />
    </section>
  );
}
