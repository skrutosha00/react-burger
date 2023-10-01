import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./modal.module.css";
import ModalOverlay from "components/modal-overlay/modal-overlay";

const portalTarget = document.querySelector("#modal");

export default function Modal({ children, handler }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };

    function handleKeyPress(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
  }, []);

  function closeModal() {
    handler(false);
  }

  return (
    <>
      {createPortal(
        <>
          <div className={styles.modal}>
            {children}
            <div className={styles.closeIcon} onClick={closeModal}>
              <CloseIcon />
            </div>
          </div>
          <ModalOverlay clickHandler={closeModal} />
        </>,
        portalTarget
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  handler: PropTypes.func.isRequired
};
