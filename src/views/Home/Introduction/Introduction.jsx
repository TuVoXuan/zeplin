import React from "react";
import styles from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles["introduction"]}>
      <h1 className={styles["introduction__title"]}>WHAT HAPPENED!</h1>
      <p className={styles["introduction__description"]}>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first step to your
        brand's success. How to create mobile-optimized videos in minutes.
      </p>
    </section>
  );
}
