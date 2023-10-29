import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./profile-sidebar.module.css";
import { logout } from "services/actions/logout";

export default function ProfileSidebar({ activeIndex, footerText, extraClass = "" }) {
  const dispatch = useDispatch();
  const { refreshToken } = useSelector((store) => store.auth);
  const { logoutRequest } = useSelector((store) => store.logout);
  const [logoutLinkIsHovered, setLogoutLinkIsHovered] = useState(false);

  function onLogoutClick() {
    if (logoutRequest) {
      return;
    }
    dispatch(logout(JSON.stringify({ token: refreshToken })));
  }

  function onLogoutOver() {
    setLogoutLinkIsHovered(true);
  }

  function onLogoutLeave() {
    setLogoutLinkIsHovered(false);
  }

  return (
    <aside className={`text text_type_main-medium ${extraClass}`}>
      <Link to="/profile">
        <nav className={`${styles.nav} ${activeIndex === 0 ? "" : "text_color_inactive"}`}>Профиль</nav>
      </Link>
      <Link to="/profile/orders">
        <nav className={`${styles.nav} ${activeIndex === 1 ? "" : "text_color_inactive"}`}>История заказов</nav>
      </Link>

      <nav
        onClick={onLogoutClick}
        onMouseOver={onLogoutOver}
        onMouseLeave={onLogoutLeave}
        className={`${styles.nav} ${styles.logout} ${logoutLinkIsHovered ? "" : "text_color_inactive"}`}>
        Выход
      </nav>

      <p className={`${styles.footerText} text text_type_main-small mt-20`}>{footerText}</p>
    </aside>
  );
}

ProfileSidebar.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  footerText: PropTypes.string,
  extraClass: PropTypes.string
};
