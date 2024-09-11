import React from "react";
import { Link } from "react-router-dom";
import styles from "./BullentBox.module.scss";
import clsx from "clsx";

export default function BulletinBox({ news, className }) {
  return (
    <div className={clsx(styles["bulletin-box"], className)}>
      {news.map((item) => (
        <div className={styles["bulletin-box__item"]}>
          <span className={styles["bulletin-box__item__type_tag"]}>
            {item.type}
          </span>
          <Link className={styles["bulletin-box__item__link"]} to={"#"}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
