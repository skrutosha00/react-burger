import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./tabs.module.css";

export default function Tabs() {
  const [current, setCurrent] = useState("bunTab");

  const setTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.tabs} mt-5 mb-10`}>
      <Tab value="bunTab" active={current === "bunTab"} onClick={setTab}>
        Булки
      </Tab>
      <Tab value="sauceTab" active={current === "sauceTab"} onClick={setTab}>
        Соусы
      </Tab>
      <Tab value="mainTab" active={current === "mainTab"} onClick={setTab}>
        Начинки
      </Tab>
    </div>
  );
}
