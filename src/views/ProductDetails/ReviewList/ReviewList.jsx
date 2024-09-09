import React, { Fragment, useState } from "react";
import styles from "./ReviewList.module.scss";
import ReviewItem from "../ReviewItem/ReviewItem";
import Pagination from "../../../components/Pagination/Pagination";
import useResponsive from "../../../hook/useResponsive";

const reviews = [
  {
    img: "https://i.pinimg.com/736x/65/24/5c/65245c3af235e5f639c836d137c0e7ee.jpg",
    productClarification: "Size m, color blue",
    rate: 4,
    review:
      "따듯하고 촉감도 부드럽고 좋은 것 같아요. 선물용으로 하나 더 사서 주었는데 기뻐하더라구요. 강추입니다!",
    reviewDate: "2024.09.09",
    reviewerName: "Jin Jiano",
  },
  {
    img: "https://i.pinimg.com/564x/cd/ed/b4/cdedb45f220ce61153abcc2579ebe155.jpg",
    productClarification: "Size xl, color red",
    rate: 5,
    review: "너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.",
    reviewDate: "2024.09.09",
    reviewerName: "Jisoo Kim",
  },
  {
    img: "https://i.pinimg.com/564x/52/a4/f4/52a4f4c071dc2beea37f0460b1b77cb9.jpg",
    productClarification: "Size xl, color red",
    rate: 3,
    review:
      "따듯하고 촉감도 부드럽고 좋은 것 같아요. 선물용으로 하나 더 사서 주었는데 기뻐하더라구요. 강추입니다!",
    reviewDate: "2024.09.09",
    reviewerName: "Minho Lee",
  },
  {
    img: "https://i.pinimg.com/564x/aa/0f/7c/aa0f7cf66bd80d385c3bdd40a41e3666.jpg",
    productClarification: "Size xl, color red",
    rate: 1,
    review: "착용감이 가볍고 좋네요. 앞으로도 사용할 것 같습니다.",
    reviewDate: "2024.09.09",
    reviewerName: "Hyunwoo Choi",
  },
  {
    img: "https://i.pinimg.com/564x/8f/f3/a3/8ff3a302f827ee057cbc727ccf35ee97.jpg",
    productClarification: "Size xl, color red",
    rate: 4,
    review: "너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.",
    reviewDate: "2024.09.09",
    reviewerName: "Nari Jung",
  },
];

export default function ReviewList() {
  const [currPage, setCurrPage] = useState(1);
  const screenSize = useResponsive();

  const onChangePage = (page) => {
    setCurrPage(page);
  };

  return (
    <div className={styles["review-list-wrap"]}>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Fragment key={`${review.reviewerName}${review.reviewDate}`}>
            <div className={styles["divider"]}></div>
            <ReviewItem
              img={review.img}
              productClarification={review.productClarification}
              rate={review.rate}
              review={review.review}
              reviewDate={review.reviewDate}
              reviewerName={review.reviewerName}
            />
            {index === review.length - 1 && (
              <div className={styles["divider"]}></div>
            )}
          </Fragment>
        ))
      ) : (
        <p>No review</p>
      )}

      <Pagination
        className={styles["pagination"]}
        totalPages={10}
        onChange={onChangePage}
        current={currPage}
        maxVisiblePages={screenSize === "xs" ? 3 : 5}
      />
    </div>
  );
}
