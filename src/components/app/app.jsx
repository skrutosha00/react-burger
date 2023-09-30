import { useContext, useEffect } from "react";

import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import AppHeader from "components/app-header/app-header";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import { Context } from "context";

export default function App() {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const response = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
      const responseJson = await response.json();
      setData(responseJson.data);
    }
  }, []);

  return (
    <>
      <AppHeader />
      {data.length && (
        <main className={`${styles.main}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </>
  );
}
