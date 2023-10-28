import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-section.module.css";
import { getOrder } from "services/actions/order";
import { useModal } from "hooks/useModal";
import OrderDetails from "components/order-details/order-details";
import { getToken } from "services/actions/token";

export default function OrderSection() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const constructorIngredients = useSelector((store) => store.constructorIngredients);
  const { user, accessToken, refreshToken } = useSelector((store) => store.auth);
  const { orderFailed } = useSelector((store) => store.order);

  const isButtonDisabled = !constructorIngredients.find((ingredient) => ingredient.type === "bun");

  const totalCost = constructorIngredients.reduce((acc, ingredient) => {
    const multiplier = ingredient.type === "bun" ? 2 : 1;
    return acc + ingredient.price * multiplier;
  }, 0);

  useEffect(() => {
    if (!orderFailed || !accessToken) return;
    sendOrder();
  }, [accessToken]);

  useEffect(() => {
    if (!orderFailed) return;
    dispatch(getToken(JSON.stringify({ token: refreshToken })));
  }, [orderFailed]);

  function sendOrder() {
    const requestBody = JSON.stringify({ ingredients: constructorIngredients.map((ingredient) => ingredient._id) });
    dispatch(getOrder(requestBody));
  }

  function handleOrderButtonClick() {
    if (!user) {
      navigate("/login");
      return;
    }
    sendOrder();
    openModal();
  }

  return (
    <>
      {isModalOpen && <OrderDetails close={closeModal} />}
      <section className={`${styles.section} mt-10 pr-4`}>
        <div className={styles.total}>
          <span className="text text_type_digits-medium">{totalCost}</span>
          <CurrencyIcon />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          disabled={isButtonDisabled}
          onClick={handleOrderButtonClick}>
          Оформить заказ
        </Button>
      </section>
    </>
  );
}
