import styles from "./order-details.module.css";
import okImage from "images/order-ok.svg";
import Modal from "components/modal/modal";
import { useAppSelector } from "hooks/reduxHooks";

export default function OrderDetails({ close }: { close: () => void }) {
  const { orderNumber } = useAppSelector((store) => store.order);

  return (
    <Modal close={close}>
      <div className={`${styles.title} mt-10`}>
        {orderNumber ? (
          <div className={`${styles.orderId} text text_type_digits-large `}>{orderNumber}</div>
        ) : (
          <div className={`${styles.loading} text text_type_main-large`}>Загрузка...</div>
        )}
      </div>
      <div className="text text_type_main-medium mt-8">идентификатор заказа</div>

      <div className={`${styles.okImageCont} mt-15`}>
        <img src={okImage} alt="tick" className={`${styles.okImage}`} />
      </div>

      <div className="text text_type_main-default mt-15">Ваш заказ начали готовить</div>
      <div className="text text_type_main-default text_color_inactive mt-2 mb-10">
        Дождитесь готовности на орбитальной станции
      </div>
    </Modal>
  );
}
