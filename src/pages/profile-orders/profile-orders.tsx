import { useEffect } from "react";

import styles from "./profile-orders.module.css";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  wsProfileOrdersClose,
  wsProfileOrdersStart
} from "services/actions/profileOrders";
import { PROFILE_ORDERS_URL } from "services/globalVars";
import ProfileSidebar from "components/profile-sidebar/profile-sidebar";
import OrderCard from "components/order-card/order-card";

export default function ProfileOrdersPage() {
  const { orders } = useAppSelector((store) => store.profileOrders);
  const { accessToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const sortedOrders = [...orders];
  sortedOrders.sort(
    (a, b) =>
      -(new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate())
  );
  const token = accessToken?.replace("Bearer ", "");

  useEffect(() => {
    dispatch(wsProfileOrdersStart(PROFILE_ORDERS_URL + `?token=${token}`));

    return () => {
      dispatch(wsProfileOrdersClose());
    };
  }, []);

  return (
    <main className={styles.main}>
      <ProfileSidebar
        activeIndex={1}
        footerText="В этом разделе вы можете просмотреть свою историю заказов"
        extraClass={styles.sidebar}
      />
      <section className={`${styles.orders} custom-scroll`}>
        {sortedOrders.map((order) => (
          <OrderCard
            order={order}
            toLink={`/profile/orders/${order.number}`}
            extraClass={styles.card}
            key={order._id}
          />
        ))}
      </section>
    </main>
  );
}
