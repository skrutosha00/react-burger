import { useState } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-section.module.css";
import OrderDetails from "components/order-details/order-details";

const totalCost = 600;

export default function OrderSection() {
  const [isModalShown, setIsModalShown] = useState(false);

  function buttonClickHandler() {
    setIsModalShown(true);
  }

  return (
    <>
      {isModalShown && <OrderDetails handler={setIsModalShown} />}
      <section className={`${styles.section} mt-10 pr-4`}>
        <div className={styles.total}>
          <span className="text text_type_digits-medium">{totalCost}</span>
          <CurrencyIcon />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={buttonClickHandler}>
          Оформить заказ
        </Button>
      </section>
    </>
  );
}
