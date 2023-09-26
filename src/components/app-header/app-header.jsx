import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.innerHeader}>
        <div className={styles.leftHeader}>
          <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5 mr-1`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">Конструктор</span>
          </nav>
          <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5`}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">Лента заказов</span>
          </nav>
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</span>
        </nav>
      </div>
    </header>
  );
}
