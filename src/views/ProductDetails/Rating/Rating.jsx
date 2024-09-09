import React from "react";
import styles from "./Rating.module.scss";
import Icons from "../../../components/Icons";
import clsx from "clsx";

export default function Rating({ rate, size = "small", className }) {
  return (
    <div className={clsx(styles["rating-wrap"], styles[size], className)}>
      {new Array(5).fill(0).map((item, index) => (
        <Icons.Star
          key={index}
          className={clsx(
            styles["rating-wrap__icon"],
            styles[size],
            index <= rate - 1 && styles["rating-wrap__icon--active"]
          )}
        />
      ))}
    </div>
  );
}
