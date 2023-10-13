import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./tabs.module.css";
import { SWITCH_TAB } from "services/actions/ingredients";

export default function Tabs() {
  const { currentTab, visibleSections } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  function handleClick(tab) {
    dispatch({
      type: SWITCH_TAB,
      tab
    });
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    for (let type of ["bun", "sauce", "main"]) {
      if (visibleSections[type]) {
        dispatch({
          type: SWITCH_TAB,
          tab: type
        });
        return;
      }
    }
  }, [visibleSections]);

  return (
    <div className={`${styles.tabs} mt-5 mb-10`}>
      <Tab value="bun" active={currentTab === "bun"} onClick={handleClick}>
        Булки
      </Tab>
      <Tab value="sauce" active={currentTab === "sauce"} onClick={handleClick}>
        Соусы
      </Tab>
      <Tab value="main" active={currentTab === "main"} onClick={handleClick}>
        Начинки
      </Tab>
    </div>
  );
}
