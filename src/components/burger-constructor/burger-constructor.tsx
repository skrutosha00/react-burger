import { CSSProperties, useMemo } from "react";
import { useDrop } from "react-dnd/dist/hooks";
import { nanoid } from "nanoid";
import { ConnectDropTarget } from "react-dnd";

import styles from "./burger-constructor.module.css";
import { TConstructorIngredient, TIngredient } from "services/types/appTypes";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { addConstructorIngredient } from "services/actions/constructorIngredients";
import { dragTypes } from "services/globalVars";
import ConstructorItem from "components/constructor-item/constructor-item";
import OrderSection from "components/order-section/order-section";

export default function BurgerConstructor() {
  const dispatch = useAppDispatch();
  const ingredients: TConstructorIngredient[] = useAppSelector(
    (store) => store.constructorIngredients
  );
  const bun = useMemo(
    () => ingredients.find((ingredient) => ingredient.type === "bun"),
    [ingredients]
  );
  const ingredientList = useMemo(
    () => ingredients.filter((ingredient) => ingredient.type !== "bun"),
    [ingredients]
  );

  const [{ isOver }, ref]: [any, ConnectDropTarget] = useDrop<TIngredient>(
    () => ({
      accept: dragTypes.INGREDIENT,
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      drop(item: TIngredient) {
        dispatch(addConstructorIngredient({ ...item, uid: nanoid() }));
      },
    })
  );

  const style: CSSProperties = {
    boxShadow: isOver ? "1px 1px yellow, -1px -1px yellow" : "unset",
  };

  return (
    <section className={`${styles.constructor} pt-25 pl-4`}>
      <div className={styles.ingredients} ref={ref} style={style}>
        {!!ingredients.length && (
          <>
            {bun && (
              <div className="mb-4">
                <ConstructorItem ingredient={bun} isLocked={true} type="top" />
              </div>
            )}
            <ul className={`${styles.unlockedItems} custom-scroll`}>
              {ingredientList.map((ingredient, index) => (
                <li key={ingredient.uid}>
                  <ConstructorItem
                    ingredient={ingredient}
                    index={index}
                    isLocked={false}
                  />
                </li>
              ))}
            </ul>
            {bun && (
              <div className="mt-4">
                <ConstructorItem
                  ingredient={bun}
                  isLocked={true}
                  type="bottom"
                />
              </div>
            )}
          </>
        )}
      </div>
      <OrderSection />
    </section>
  );
}
