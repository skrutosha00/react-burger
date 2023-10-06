import { useContext, useEffect } from "react";

import styles from "./app.module.css";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";
import AppHeader from "components/app-header/app-header";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import { Context } from "context";
import fetchJson from "utils/fetchJson";

const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

export default function App() {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const responceJson = await fetchJson(dataUrl);
        setData(responceJson.data);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <>
      <AppHeader />
      {!!data.length && (
        <main className={`${styles.main}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </>
  );
}
