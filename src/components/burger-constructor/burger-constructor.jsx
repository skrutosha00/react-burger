import styles from "./burger-constructor.module.css";
import data from "../../utils/data.json";
import ConstructorItem from "../constructor-item/constructor-item";
import OrderSection from "../order-section/order-section";

data = data.slice(0, 7);
const bun = data.find((ingredient) => ingredient.type === "bun");

export default function BurgerConstructor() {
  return (
    <section className={`${styles.constructor} pt-25 pl-4`}>
      <div className="mb-4">
        <ConstructorItem ingredient={bun} isLocked={true} type="top" />
      </div>
      <ul className={`${styles.unlockedItems} custom-scroll`}>
        {data
          .filter((ingredient) => ingredient.type !== "bun")
          .map((ingredient) => (
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
