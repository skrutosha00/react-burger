import styles from "./order-details.module.css";
import okImage from "images/order-ok.svg";
import Modal from "components/modal/modal";

export default function OrderDetails({ handler }) {
  return (
    <Modal handler={handler}>
      <div className={`${styles.orderId} text text_type_digits-large mt-20`}>034789</div>
      <div className="text text_type_main-medium mt-8">идентификатор заказа</div>

      <div className={`${styles.okImageCont} mt-15`}>
        <img src={okImage} alt="" className={`${styles.okImage}`} />
      </div>

      <div className="text text_type_main-default mt-15">Ваш заказ начали готовить</div>
      <div className="text text_type_main-default text_color_inactive mt-2 mb-20">
        Дождитесь готовности на орбитальной станции
      </div>
    </Modal>
  );
}
