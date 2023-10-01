import { useContext, useMemo } from "react";

import styles from "./burger-constructor.module.css";
import ConstructorItem from "components/constructor-item/constructor-item";
import OrderSection from "components/order-section/order-section";
import { Context } from "context";

export default function BurgerConstructor() {
  const { data } = useContext(Context);
  const bun = useMemo(() => data.find((ingredient) => ingredient.type === "bun"), data);
  const ingredientList = useMemo(() => data.filter((ingredient) => ingredient.type !== "bun"), data);

  return (
    <section className={`${styles.constructor} pt-25 pl-4`}>
      <div className="mb-4">
        <ConstructorItem ingredient={bun} isLocked={true} type="top" />
      </div>
      <ul className={`${styles.unlockedItems} custom-scroll`}>
        {ingredientList.map((ingredient) => (
          <li key={ingredient._id}>
            <ConstructorItem ingredient={ingredient} isLocked={false} />
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <ConstructorItem ingredient={bun} isLocked={true} type="bottom" />
      </div>

      <OrderSection />
    </section>
  );
}
