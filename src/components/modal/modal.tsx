import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./modal.module.css";
import ModalOverlay from "components/modal-overlay/modal-overlay";

const portalTarget = document.querySelector("#modal") as HTMLDivElement;

type TProps = {
  children: ReactNode;
  close: () => void;
};

export default function Modal({ children, close }: TProps) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {createPortal(
        <>
          <div className={styles.modal}>
            {children}
            <div
              className={styles.closeIcon}
              onClick={close}
              cy-test="ModalCloseButton">
              <CloseIcon type="primary" />
            </div>
          </div>
          <ModalOverlay clickHandler={close} />
        </>,
        portalTarget
      )}
    </>
  );
}
