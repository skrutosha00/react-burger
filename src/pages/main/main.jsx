import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./main.module.css";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "components/burger-constructor/burger-constructor";

export default function MainPage() {
  const { ingredients } = useSelector((store) => store.ingredients);

  return (
    <>
      {!!ingredients.length && (
        <DndProvider backend={HTML5Backend}>
          <main className={`${styles.main}`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      )}
    </>
  );
}
