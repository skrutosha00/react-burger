import { useParams } from "react-router-dom";

import styles from "./ingredients.module.css";
import IngredientDetails from "components/ingredient-details/ingredient-details";
import { useEffect } from "react";
import { setCurrentIngredient } from "services/actions/currentIngredient";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { TIngredient } from "services/types/appTypes";

export default function IngredientPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { ingredients }: { ingredients: TIngredient[] } = useAppSelector(
    (store) => store.ingredients
  );
  const currentIngredient = useAppSelector((store) => store.currentIngredient);

  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  useEffect(() => {
    if (!ingredients.length || !ingredient) return;
    dispatch(setCurrentIngredient(ingredient));
  }, [ingredients]);

  if (!ingredients.length || !currentIngredient) {
    return <></>;
  }

  return (
    <main className={styles.main}>
      <IngredientDetails />
    </main>
  );
}
