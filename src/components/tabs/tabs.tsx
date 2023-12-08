import { useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./tabs.module.css";
import { switchTab } from "services/actions/ingredients";
import { INGREDIENT_TYPES } from "services/globalVars";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { TIngredientType } from "services/types/appTypes";

export default function Tabs() {
  const { currentTab, visibleSections } = useAppSelector(
    (store) => store.ingredients
  );
  const dispatch = useAppDispatch();

  function handleClick(tab: TIngredientType | string) {
    dispatch(switchTab(tab as TIngredientType));
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    for (let type of INGREDIENT_TYPES as TIngredientType[]) {
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
