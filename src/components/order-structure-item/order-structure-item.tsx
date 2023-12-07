import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { TStructureItem } from "services/types/appTypes";
import styles from "./order-structure-item.module.css";

type TProps = {
  structureItem: TStructureItem;
};

export function OrderStructureItem({ structureItem }: TProps) {
  return (
    <div className={styles.item}>
      <div className={styles.itemLeft}>
        <div className={`${styles.imageCont} mr-4`}>
          <img src={structureItem.imageLink} alt="structure item logo" />
        </div>
        <h5 className={`${styles.name} text text_type_main-default`}>
          {structureItem.name}
        </h5>
      </div>

      <div className={`${styles.price} text text_type_digits-default`}>
        {structureItem.count} x {structureItem.price}
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
}
