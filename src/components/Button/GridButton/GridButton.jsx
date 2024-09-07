import React from "react";
import styles from "./GridButton.module.scss";
import clsx from "clsx";

export default function GridButton({
  rows,
  columns,
  height,
  width,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={styles["grid-button"]}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        height: height + "px",
        width: width + "px",
      }}
    >
      {new Array(rows * columns).fill(0).map((item, index) => (
        <div
          key={index + new Date().toISOString}
          className={clsx(
            styles["grid-button__cell"],
            active && styles["grid-button__cell--active"]
          )}
        ></div>
      ))}
    </div>
  );
}
