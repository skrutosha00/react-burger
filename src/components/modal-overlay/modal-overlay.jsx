import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

export default function ModalOverlay({ clickHandler }) {
  return <div className={styles.overlay} onClick={clickHandler}></div>;
}

ModalOverlay.propTypes = {
  clickHandler: PropTypes.func
};
