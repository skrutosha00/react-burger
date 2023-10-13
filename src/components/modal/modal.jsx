import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./modal.module.css";
import ModalOverlay from "components/modal-overlay/modal-overlay";

const portalTarget = document.querySelector("#modal");

export default function Modal({ children, close }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };

    function handleKeyPress(event) {
      if (event.key === "Escape") {
        close();
      }
    }
  }, []);

  return (
    <>
      {createPortal(
        <>
          <div className={styles.modal}>
            {children}
            <div className={styles.closeIcon} onClick={close}>
              <CloseIcon />
            </div>
          </div>
          <ModalOverlay clickHandler={close} />
        </>,
        portalTarget
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired
};
