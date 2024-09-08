import React from "react";
import Icons from "../../../components/Icons";
import styles from "./DiscountAlert.module.scss";

export default function DiscountAlert({ children, link }) {
  return (
    <a className={styles["discount-alert"]} href={link}>
      {children}
      <Icons.ArrowRightLong className={styles["discount-alert__icon"]} />
    </a>
  );
}
