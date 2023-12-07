import styles from "./profile-orders.module.css";
import { useAppSelector } from "hooks/reduxHooks";
import OrderCard from "components/order-card/order-card";
import ProfileSidebar from "components/profile-sidebar/profile-sidebar";
import { nanoid } from "nanoid";

export default function ProfileOrdersPage() {
  const { orders } = useAppSelector((store) => store.profileOrders);
  orders.sort((a, b) => -(new Date(a.createdAt) - new Date(b.createdAt)));

  return (
    <main className={styles.main}>
      <ProfileSidebar
        activeIndex={1}
        footerText="В этом разделе вы можете просмотреть свою историю заказов"
        extraClass={styles.sidebar}
      />
      <section className={`${styles.orders} custom-scroll`}>
        {orders.map((order) => (
          <OrderCard
            order={order}
            toLink={`/profile/orders/${order._id}`}
            extraClass={styles.card}
            key={nanoid()}
          />
        ))}
      </section>
    </main>
  );
}
