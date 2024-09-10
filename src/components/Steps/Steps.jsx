import React from "react";
import styles from "./Steps.module.scss";
import clsx from "clsx";

export default function Steps({ steps, className }) {
  return (
    <div className={clsx(styles["steps-wrap"], className)}>
      {steps.map((step, index) => (
        <span
          className={clsx(
            styles["steps-wrap__item"],
            step.active && styles["steps-wrap__item--active"]
          )}
        >{`${index + 1 < 10 ? `0${index + 1}` : index} ${step.label} ${
          index < steps.length - 1 ? ">" : ""
        }`}</span>
      ))}
    </div>
  );
}
