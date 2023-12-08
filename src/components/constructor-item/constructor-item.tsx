import { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";

import { useAppDispatch } from "hooks/reduxHooks";
import styles from "./constructor-item.module.css";
import {
  deleteConstructorIngredient,
  moveConstructorIngredient,
} from "services/actions/constructorIngredients";
import { dragTypes } from "services/globalVars";
import { TConstructorIngredient } from "services/types/appTypes";

type TProps = {
  ingredient: TConstructorIngredient;
  type?: "top" | "bottom";
  isLocked?: boolean;
  index?: number;
};

export default function ConstructorItem({
  ingredient,
  type,
  isLocked,
  index,
}: TProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  let name = ingredient.name;
  if (type === "top") {
    name += " (верх)";
  } else if (type === "bottom") {
    name += " (низ)";
  }

  const [, drop] = useDrop<{ index: number }>({
    accept: dragTypes.CONSTRUCTOR_INGREDIENT,
    hover(item, monitor) {
      if (!ref.current || ingredient.type === "bun" || index === undefined) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveConstructorIngredient(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ingredient.type === "bun" ? "" : dragTypes.CONSTRUCTOR_INGREDIENT,
    item: () => {
      return { id: ingredient.uid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const style = {
    opacity: isDragging ? "0" : "1",
  };
  drag(drop(ref));

  function handleClose() {
    dispatch(deleteConstructorIngredient(ingredient));
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`${styles.item} ${isLocked ? styles.isLocked : ""}`}>
      {!isLocked && <DragIcon type="primary" />}

      <ConstructorElement
        isLocked={isLocked}
        price={ingredient.price}
        thumbnail={ingredient.image}
        text={name}
        handleClose={handleClose}
        type={type}
        extraClass={styles.constructorElement}
      />
    </div>
  );
}
