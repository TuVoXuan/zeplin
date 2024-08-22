import React from "react";
import styles from "./Brand.module.scss";
import clsx from "clsx";

export default function Brand(props) {
  const { brandName, thumbnail, nameBg } = props;
  return (
    <div className={styles["brand-wrap"]}>
      <h2
        className={clsx(
          styles["brand-wrap__name"],
          styles[`brand-wrap__name--${nameBg}`]
        )}
      >
        {brandName}
      </h2>
      <img
        className={styles["brand-wrap__thumbnail"]}
        src={thumbnail}
        alt={brandName}
      />
    </div>
  );
}
