import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ingredients.module.css";
import IngredientDetails from "components/ingredient-details/ingredient-details";
import { useEffect } from "react";
import { setCurrentIngredient } from "services/actions/currentIngredient";

export default function IngredientPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const currentIngredient = useSelector((store) => store.currentIngredient);

  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  useEffect(() => {
    if (!ingredients.length) return;
    dispatch(setCurrentIngredient(ingredient));
  }, [ingredients]);

  if (!ingredients.length || !currentIngredient) {
    return;
  }

  return (
    <main className={styles.main}>
      <IngredientDetails />
    </main>
  );
}
