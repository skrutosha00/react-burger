import styles from "./modal-overlay.module.css";

type TProps = { clickHandler: () => void };

export default function ModalOverlay({ clickHandler }: TProps) {
  return <div className={styles.overlay} onClick={clickHandler}></div>;
}
