import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./main.module.css";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import { getIngredients } from "services/actions/ingredients";

export default function MainPage() {
  const { ingredients } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

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
