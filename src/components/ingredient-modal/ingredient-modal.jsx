import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import IngredientDetails from "components/ingredient-details/ingredient-details";
import Modal from "components/modal/modal";
import { deleteCurrentIngredient, setCurrentIngredient } from "services/actions/currentIngredient";

export default function IngredientModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const currentIngredient = useSelector((store) => store.currentIngredient);

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
    return;
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
