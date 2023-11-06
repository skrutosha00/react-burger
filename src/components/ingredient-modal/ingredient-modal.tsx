import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import IngredientDetails from "components/ingredient-details/ingredient-details";
import Modal from "components/modal/modal";
import { deleteCurrentIngredient, setCurrentIngredient } from "services/actions/currentIngredient";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { TIngredient } from "services/types";

export default function IngredientModal() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { ingredients }: { ingredients: TIngredient[] } = useAppSelector((store) => store.ingredients);
  const currentIngredient: TIngredient = useAppSelector((store) => store.currentIngredient);

  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  useEffect(() => {
    if (!ingredients.length) return;
    dispatch(setCurrentIngredient(ingredient));
  }, [ingredients]);

  function closeModal() {
    dispatch(deleteCurrentIngredient());
    navigate(-1);
  }

  if (!ingredients.length || !ingredient) {
    return <></>;
  }

  return (
    <>
      {currentIngredient._id && (
        <Modal close={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}
