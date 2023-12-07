import { nanoid } from "nanoid";

import { useAppSelector } from "hooks/reduxHooks";
import styles from "./feed.module.css";
import OrderCard from "components/order-card/order-card";
import OrderNumbers from "components/order-numbers/order-numbers";

export function FeedPage() {
  const { orders } = useAppSelector((store) => store.ordersAll);

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
              toLink={`/feed/${order._id}`}
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
