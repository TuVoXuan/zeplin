import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import ProductInfo from "../../views/ProductDetails/ProductInfo/ProductInfo";
import clsx from "clsx";
import Rating from "../../views/ProductDetails/Rating/Rating";
import useResponsive from "../../hook/useResponsive";
import ReviewImgList from "../../views/ProductDetails/ReviewImgList/ReviewImgList";
import ReviewList from "../../views/ProductDetails/ReviewList/ReviewList";
import BestProduct from "../../views/ProductDetails/BestProducts/BestProduct";
import InfoSection from "../../components/InfoSection/InfoSection";

const tabs = [
  {
    label: "상품 상세정보",
    content: <div className={styles["tab-content-wrap"]}>tab 1</div>,
  },
  {
    label: "상품 구매 안내",
    content: (
      <div className={styles["tab-content-wrap"]}>
        상품에 관해 여러가지 질문해보세요.
      </div>
    ),
  },
  {
    label: "재입고 문의",
    content: <div className={styles["tab-content-wrap"]}>tab 3</div>,
  },
  {
    label: "배송문의",
    content: <div className={styles["tab-content-wrap"]}>tab 4</div>,
  },
  {
    label: "기타",
    content: <div className={styles["tab-content-wrap"]}>tab 5</div>,
  },
];

const actions = [
  {
    label: "상품 Q&A",
    href: "#",
  },
];

const reviewImgList = [
  "https://i.pinimg.com/736x/65/24/5c/65245c3af235e5f639c836d137c0e7ee.jpg",
  "https://i.pinimg.com/564x/d0/cc/42/d0cc42178cab3a7d96b69d3eb73cfc50.jpg",
  "https://i.pinimg.com/564x/cd/ed/b4/cdedb45f220ce61153abcc2579ebe155.jpg",
  "https://i.pinimg.com/564x/52/a4/f4/52a4f4c071dc2beea37f0460b1b77cb9.jpg",
  "https://i.pinimg.com/564x/aa/0f/7c/aa0f7cf66bd80d385c3bdd40a41e3666.jpg",
  "https://i.pinimg.com/564x/8f/f3/a3/8ff3a302f827ee057cbc727ccf35ee97.jpg",
  "https://i.pinimg.com/736x/8c/89/50/8c8950fc4850c615922f43fd01309ae6.jpg",
  "https://i.pinimg.com/564x/39/a5/7b/39a57bf7eb192ef5e30799e321378ebd.jpg",
  "https://i.pinimg.com/564x/db/9e/6a/db9e6a72f05217e95342b481b697bdc6.jpg",
  "https://i.pinimg.com/564x/99/5c/07/995c0741680a0b78b8856b38d4b7aee1.jpg",
];

export default function ProductDetails() {
  const { productCode } = useParams();
  const screenSize = useResponsive();

  useEffect(() => {
    console.log("productCode: ", productCode);
  }, []);
  return (
    <div className={clsx("container", styles["product-details-wrap"])}>
      <ProductInfo />
      <InfoSection
        title={"상품 qna"}
        tabs={tabs}
        defaultActiveTab={1}
        actions={actions}
      />

      <InfoSection
        title={"상품 결제 정보"}
        className={styles["prod-payment-info-section"]}
      >
        <p>
          고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
        </p>
        <p>
          확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
          아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
        </p>
        <p>
          무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
          가까운 은행에서 직접 입금하시면 됩니다.
        </p>
        <p>
          주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
          7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
        </p>
      </InfoSection>

      <InfoSection
        title={"교환 및 반품 정보"}
        className={styles["return-policy-section"]}
      >
        <div className={styles["return-policy-section__para"]}>
          <h3>교환 및 반품이 가능한 경우</h3>

          <p>상품을 공급 받으신 날로부터 7일이내.</p>
          <p>공급받으신 상품 및 용역의 내용이 표시.광고 내용과</p>
          <p>다르거나 다르게 이행된 경우에는 공급받은 날로부터 7일이내.</p>
        </div>

        <div className={styles["return-policy-section__para"]}>
          <h3>교환 및 반품이 불가능한 경우</h3>
          <p>
            고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의
            내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
          </p>
          <p>
            고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한
            경우.
          </p>
          <p>
            시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히
            감소한 경우
          </p>
          <p>복제가 가능한 상품등의 포장을 훼손한 경우</p>
          <p>
            (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기
            바랍니다.)
          </p>
        </div>
      </InfoSection>

      <InfoSection
        title={
          <div className={styles["review-section__title"]}>
            <span>review (16)</span>{" "}
            <Rating rate={4} size={screenSize === "xl" ? "medium" : "small"} />
          </div>
        }
        actions={[{ label: "리뷰쓰기", href: "#" }]}
        className={styles["review-section"]}
      >
        <ReviewImgList imgList={reviewImgList} />
        <ReviewList />
      </InfoSection>

      <InfoSection
        title={"관련 상품 BEST"}
        className={styles["best-product-section"]}
      >
        <BestProduct />
      </InfoSection>
    </div>
  );
}
