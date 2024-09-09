import React from "react";
import styles from "./ReviewItem.module.scss";
import Rating from "../Rating/Rating";
import { makeStringUnpredictableEnd } from "../../../utils";

export default function ReviewItem({
  img,
  productClarification,
  review,
  reviewerName,
  reviewDate,
  rate,
}) {
  return (
    <div className={styles["review-item-wrap"]}>
      <div className={styles["review-item-wrap__img"]}>
        <img src={img} alt={`review product img of ${reviewerName}`} />
      </div>
      <div className={styles["review-item-wrap__text-content"]}>
        <p className={styles["reviewer-name"]}>
          {makeStringUnpredictableEnd(reviewerName, 3)}
        </p>
        <Rating rate={rate} size="small" className={styles["rating"]} />
        <p className={styles["date-review"]}>{reviewDate}</p>

        <div className={styles["text-group"]}>
          <p className={styles["prod-clarification"]}>
            [{productClarification}]
          </p>
          <p className={styles["review"]}>{review}</p>
        </div>
      </div>
    </div>
  );
}
