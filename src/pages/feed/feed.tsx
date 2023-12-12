import { useEffect } from "react";
import { nanoid } from "nanoid";

import styles from "./feed.module.css";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import OrderCard from "components/order-card/order-card";
import OrderNumbers from "components/order-numbers/order-numbers";
import { wsOrdersAllClose, wsOrdersAllStart } from "services/actions/ordersAll";
import { ORDERS_All_URL } from "services/globalVars";

export default function FeedPage() {
  const { orders } = useAppSelector((store) => store.ordersAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsOrdersAllStart(ORDERS_All_URL));

    return () => {
      dispatch(wsOrdersAllClose());
    };
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={`text text_type_main-large mb-4 ${styles.header}`}>
        Лента заказов
      </h1>
      <div className={styles.sections}>
        <section className={`${styles.orders} custom-scroll`}>
          {orders.map((order) => (
            <OrderCard
              order={order}
              toLink={`/feed/${order.number}`}
              extraClass={styles.orderCard}
              key={nanoid()}
            />
          ))}
        </section>

        <OrderNumbers />
      </div>
    </main>
  );
}
