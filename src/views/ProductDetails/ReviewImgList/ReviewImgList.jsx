import React from "react";
import styles from "./ReviewImgList.module.scss";

export default function ReviewImgList({ imgList }) {
  return (
    <div>
      <div className={styles["review-img-list-wrap"]}>
        {imgList.map((item, index) => (
          <div key={index} className={styles["review-img-list-wrap__item"]}>
            <img src={item} alt={`product-review-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
