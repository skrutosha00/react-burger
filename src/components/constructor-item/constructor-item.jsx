import { useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";

import styles from "./constructor-item.module.css";
import constructorIngredientShape from "propTypes/constructorIngredientShape";
import { deleteConstructorIngredient, moveConstructorIngredient } from "services/actions/constructorIngredients";
import { dragTypes } from "utils/globalVars";

export default function ConstructorItem({ ingredient, type, isLocked, index }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  let name = ingredient.name;
  if (type === "top") {
    name += " (верх)";
  } else if (type === "bottom") {
    name += " (низ)";
  }

  const [, drop] = useDrop({
    accept: dragTypes.CONSTRUCTOR_INGREDIENT,
    hover(item, monitor) {
      if (!ref.current || ingredient.type === "bun") {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveConstructorIngredient(dragIndex, hoverIndex));
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: ingredient.type === "bun" ? "" : dragTypes.CONSTRUCTOR_INGREDIENT,
    item: () => {
      return { id: ingredient.uid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const style = {
    opacity: isDragging ? "0" : "1"
  };
  drag(drop(ref));

  function handleClose() {
    dispatch(deleteConstructorIngredient(ingredient));
  }

  return (
    <div ref={ref} style={style} className={`${styles.item} ${isLocked ? styles.isLocked : ""}`}>
      {!isLocked && <DragIcon />}

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

ConstructorItem.propTypes = {
  ingredient: PropTypes.shape(constructorIngredientShape.isRequired).isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  index: PropTypes.number
};
