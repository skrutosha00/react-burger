import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-card.module.css";
import { useAppSelector } from "hooks/reduxHooks";
import { TIngredient, TOrder, TStructureItem } from "services/types/appTypes";
import { OrderStructureItem } from "components/order-structure-item/order-structure-item";
import getCardTimestamp from "utils/getCardTimestamp";
import fetchJson from "utils/fetchJson";
import { ORDER_URL } from "services/globalVars";

type TStructure = {
  [key: string]: TStructureItem;
};

type TOrdersSource = "ordersAll" | "profileOrders";

type TProps = {
  ordersSource: TOrdersSource;
};

const statusText = {
  done: "Выполнен",
  pending: "В процессе",
  created: "Создан"
};

function getStructure(order: TOrder, ingredients: TIngredient[]): TStructure {
  const structure: TStructure = {};

  for (let ingredientId of order.ingredients) {
    const ingredient = ingredients.find(
      (ingredient) => ingredient._id === ingredientId
    );

    if (!ingredient) continue;
    const multiplier = ingredient.type === "bun" ? 2 : 1;

    if (!Object.keys(structure).includes(ingredientId)) {
      structure[ingredientId] = {
        count: 1 * multiplier,
        name: ingredient.name,
        imageLink: ingredient.image,
        price: ingredient.price,
        type: ingredient.type
      };
    } else {
      structure[ingredientId].count += 1 * multiplier;
    }
  }

  return structure;
}

export default function OrderCardPage({ ordersSource }: TProps) {
  const { number } = useParams();
  const { orders } = useAppSelector((store) => store[ordersSource]);
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const [order, setOrder] = useState(
    orders.find((order) => order.number.toString() === number)
  );

  useEffect(() => {
    if (!order) {
      getOrder();
    }

    async function getOrder() {
      const responseOrder = await fetchJson(`${ORDER_URL}/${number}`);
      setOrder(responseOrder.orders[0]);
    }
  }, []);

  if (!order) {
    if (orders.length) return <Navigate to={"/no-match"} />;
    else return <></>;
  }

  const statusTextClass = order.status === "done" ? styles.light : "";
  const structure = getStructure(order, ingredients);

  const totalCost = Object.keys(structure).reduce((acc, id) => {
    return (acc += structure[id].price * structure[id].count);
  }, 0);

  return (
    <main className={styles.main}>
      <h4
        className={`${styles.orderNumber} text text_type_digits-default mb-10`}>
        #{order.number}
      </h4>
      <h2 className="text text_type_main-medium mb-3">{order.name}</h2>
      <div className={`${statusTextClass} text text_type_main-default mb-15`}>
        {statusText[order.status]}
      </div>

      <h2 className="text text_type_main-medium mb-6">Состав:</h2>
      <section className={`${styles.ingredients} custom-scroll pr-6 mb-10`}>
        {Object.keys(structure).map((ingredientId, index) => (
          <OrderStructureItem
            structureItem={structure[ingredientId]}
            key={index}
          />
        ))}
      </section>

      <section className={styles.info}>
        <div className="text text_type_main-default text_color_inactive">
          {getCardTimestamp(order.createdAt)}
        </div>
        <div className={`${styles.total} text text_type_digits-default`}>
          {totalCost} <CurrencyIcon type="primary" />
        </div>
      </section>
    </main>
  );
}
