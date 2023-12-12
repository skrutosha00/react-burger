import { nanoid } from "nanoid";

import styles from "./order-numbers.module.css";
import { TOrder } from "services/types/appTypes";
import { useAppSelector } from "hooks/reduxHooks";

function getOrders(orders: TOrder[]) {
  const readyOrders: string[] = [];
  const inProcessOrders: string[] = [];

  for (let order of orders) {
    if (order.status === "done" && readyOrders.length < 10) {
      readyOrders.push(order.number.toString());
    } else if (order.status === "pending" && inProcessOrders.length < 10) {
      inProcessOrders.push(order.number.toString());
    }
  }

  return { readyOrders, inProcessOrders };
}

export default function OrderNumbers() {
  const { orders, total, totalToday } = useAppSelector(
    (store) => store.ordersAll
  );
  const { readyOrders, inProcessOrders } = getOrders(orders);

  return (
    <section>
      <div className={`${styles.top} mb-15`}>
        <div className={styles.numbersSection}>
          <h3
            className={`${styles.numbersHeader} text text_type_main-medium mb-6`}>
            Готовы:
          </h3>
          <div className={styles.numbers}>
            {readyOrders.map((orderNumber) => (
              <span
                className={`${styles.readyNumber} text text_type_digits-default`}
                key={nanoid()}>
                {orderNumber}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.numbersSection}>
          <h3
            className={`${styles.numbersHeader} text text_type_main-medium mb-6`}>
            В работе:
          </h3>
          <div className={styles.numbers}>
            {inProcessOrders.map((orderNumber) => (
              <span className={`text text_type_digits-default`} key={nanoid()}>
                {orderNumber}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text text_type_main-large">Выполнено за все время:</h2>
      <div className={`${styles.lightText} text text_type_digits-large mb-15`}>
        {total}
      </div>

      <h2 className="text text_type_main-large">Выполнено за сегодня:</h2>
      <div className={`${styles.lightText} text text_type_digits-large mb-15`}>
        {totalToday}
      </div>
    </section>
  );
}
