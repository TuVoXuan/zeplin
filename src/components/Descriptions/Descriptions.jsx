import React, { isValidElement } from "react";
import styles from "./Descriptions.module.scss";

export default function Descriptions({ title, items }) {
  return (
    <div className={styles["descriptions"]}>
      <h4 className={styles["descriptions__title"]}>{title}</h4>
      {items.map((item) => (
        <div className={styles["descriptions__item"]}>
          <p className={styles["descriptions__item__label"]}>{item.label}</p>
          <div className={styles["descriptions__item__children"]}>
            {item.children.map((child) =>
              isValidElement(child) ? child : <p>{child}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
