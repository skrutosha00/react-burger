import { Link } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-card.module.css";
import getCardTimestamp from "utils/getCardTimestamp";
import { TIngredient, TOrder } from "services/types/appTypes";
import { useAppSelector } from "hooks/reduxHooks";

type TProps = {
  order: TOrder;
  toLink: string;
  extraClass?: string;
};

function getCardInfo(allIngredients: TIngredient[], ingredientIds: string[]) {
  const imageLimit = 6;

  let total = 0;
  const imageList: string[] = [];

  for (let id of ingredientIds) {
    const ingredient = allIngredients.find(
      (ingredient) => ingredient._id === id
    );

    if (!ingredient) {
      continue;
    }

    const multiplier = ingredient.type === "bun" ? 2 : 1;
    total += ingredient.price * multiplier;

    if (
      imageList.includes(ingredient.image) ||
      imageList.length >= imageLimit
    ) {
      continue;
    }
    imageList.push(ingredient.image);
  }

  return {
    total,
    imageList
  };
}

export default function OrderCard({ order, toLink, extraClass }: TProps) {
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const { total, imageList } = getCardInfo(ingredients, order.ingredients);

  return (
    <Link to={toLink} className={`p-6 ${styles.card} ${extraClass}`}>
      <div className={styles.cardTop}>
        <h4 className={`text text_type_digits-default`}>#{order.number}</h4>
        <div className="text text_type_main-default text_color_inactive">
          {getCardTimestamp(order.createdAt)}
        </div>
      </div>

      <h3 className={`text text_type_main-medium pt-6`}>{order.name}</h3>

      <div className={styles.cardMain}>
        <div className={styles.ingredients}>
          {imageList.map((url, index) => (
            <div className={`${styles.ingredient}`} key={index}>
              <img src={url} alt={`ingredient logo`} />
            </div>
          ))}
        </div>

        <div className={`${styles.price} text text_type_digits-default`}>
          {total}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
}
