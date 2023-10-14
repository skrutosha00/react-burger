import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./tabs.module.css";
import { switchTab } from "services/actions/ingredients";
import { INGREDIENT_TYPES } from "utils/globalVars";

export default function Tabs() {
  const { currentTab, visibleSections } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  function handleClick(tab) {
    dispatch(switchTab(tab));
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    for (let type of INGREDIENT_TYPES) {
      if (visibleSections[type]) {
        dispatch(switchTab(type));
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
