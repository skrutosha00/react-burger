import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./app-header.module.css";
import { useSelector } from "react-redux";
import useActiveHeaderNav from "hooks/useActiveHeaderNav";

export default function AppHeader() {
  const { user } = useSelector((store) => store.auth);
  const title = user ? user.name : "Личный кабинет";
  const activeNav = useActiveHeaderNav();

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.innerHeader}>
        <div className={styles.leftHeader}>
          <Link to="/">
            <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5 mr-1`}>
              <BurgerIcon type={activeNav === 0 ? "primary" : "secondary"} />
              <span className={`text text_type_main-default ${activeNav === 0 ? "" : "text_color_inactive"} ml-2`}>
                Конструктор
              </span>
            </nav>
          </Link>
          <Link to="/orders">
            <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5`}>
              <ListIcon type={activeNav === 1 ? "primary" : "secondary"} />
              <span className={`text text_type_main-default ${activeNav === 1 ? "" : "text_color_inactive"} ml-2`}>
                Лента заказов
              </span>
            </nav>
          </Link>
        </div>

        <Link to={"/"}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>

        <Link to="/profile">
          <nav className={`${styles.headerButton} pt-4 pb-4 pr-5 pl-5`}>
            <ProfileIcon type={activeNav === 2 ? "primary" : "secondary"} />
            <span className={`text text_type_main-default ${activeNav === 2 ? "" : "text_color_inactive"} ml-2`}>
              {title}
            </span>
          </nav>
        </Link>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  activeNav: PropTypes.number
};
