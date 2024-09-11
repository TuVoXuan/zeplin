import React from "react";
import styles from "./NavButton.module.scss";

export default function NavButton({ icon, engText, korText }) {
  return (
    <div className={styles["nav-btn"]}>
      {icon}
      <span className={styles["nav-btn__eng-text"]}>{engText}</span>
      <span className={styles["nav-btn__kor-text"]}>{korText}</span>
    </div>
  );
}
