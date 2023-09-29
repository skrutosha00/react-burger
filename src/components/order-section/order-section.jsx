import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-section.module.css";

export default function OrderSection() {
  const totalCost = 600;

  return (
    <section className={`${styles.section} mt-10 pr-4`}>
      <div className={styles.total}>
        <span className="text text_type_digits-medium">{totalCost}</span>
        <CurrencyIcon />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </section>
  );
}
