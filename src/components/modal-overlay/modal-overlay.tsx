import styles from "./modal-overlay.module.css";

export default function ModalOverlay({ clickHandler }: { clickHandler: () => void }) {
  return <div className={styles.overlay} onClick={clickHandler}></div>;
}
