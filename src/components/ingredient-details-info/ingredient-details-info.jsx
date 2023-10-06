import PropTypes from "prop-types";

import styles from "./ingredient-details-info.module.css";

export default function IngredientDetailsInfo({ title, value }) {
  return (
    <div className={`${styles.infoBlock}`}>
      <div>{title}</div>
      <div className="text text_type_digits-default">{value}</div>
    </div>
  );
}

IngredientDetailsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};
