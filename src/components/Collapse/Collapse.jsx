import React, { useState } from "react";
import styles from "./Collapse.module.scss";
import clsx from "clsx";

export default function Collapse({ title, children, className }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={clsx(styles["collapse-wrap"], className)}>
      <div className={styles["collapse-wrap__header"]} onClick={handleExpand}>
        <div className={styles["collapse-wrap__header__triangle"]}></div>
        <p className={styles["collapse-wrap__header__title"]}>{title}</p>
      </div>
      <div
        className={clsx(
          styles["collapse-wrap__body"],
          expanded && styles["expand"]
        )}
      >
        <div className={styles["collapse-wrap__body__content"]}>{children}</div>
      </div>
    </div>
  );
}
