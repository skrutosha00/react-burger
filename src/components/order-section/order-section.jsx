import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrder } from "services/actions/order";

import styles from "./order-section.module.css";
import OrderDetails from "components/order-details/order-details";

export default function OrderSection() {
  const [isModalShown, setIsModalShown] = useState(false);

  const constructorIngredients = useSelector((store) => store.constructorIngredients);
  const dispatch = useDispatch();

  const totalCost = constructorIngredients.reduce((acc, ingredient) => {
    const multiplier = ingredient.type === "bun" ? 2 : 1;
    return acc + ingredient.price * multiplier;
  }, 0);

  function openModal() {
    setIsModalShown(true);
  }

  function closeModal() {
    setIsModalShown(false);
  }

  function handleOrderButtonClick() {
    const requestBody = JSON.stringify({ ingredients: constructorIngredients.map((ingredient) => ingredient._id) });
    dispatch(getOrder(requestBody));
    openModal();
  }

  return (
    <>
      {isModalShown && <OrderDetails close={closeModal} />}
      <section className={`${styles.section} mt-10 pr-4`}>
        <div className={styles.total}>
          <span className="text text_type_digits-medium">{totalCost}</span>
          <CurrencyIcon />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderButtonClick}>
          Оформить заказ
        </Button>
      </section>
    </>
  );
}
