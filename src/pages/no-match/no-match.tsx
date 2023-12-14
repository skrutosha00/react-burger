import styles from "./no-match.module.css";

export default function NoMatchPage() {
  return (
    <main>
      <p className={`${styles.title} text text_type_digits-large`}>404</p>
      <p className={`${styles.subtitle} text text_type_main-medium`}>
        На этой странице ничего нет :(
      </p>
    </main>
  );
}
