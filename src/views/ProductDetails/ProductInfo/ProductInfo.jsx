import React, { useState } from "react";
import styles from "./ProductInfo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Icons from "../../../components/Icons";
import clsx from "clsx";
import Descriptions from "../../../components/Descriptions/Descriptions";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";
import DiscountAlert from "../DiscountAlert/DiscountAlert";
import InfoSection from "../InfoSection/InfoSection";
import { Link } from "react-router-dom";
import { AppPath } from "../../../constants";

const productInfoItems = [
  {
    label: "재질",
    children: ["아크릴 100%"],
  },
  {
    label: "사이즈",
    children: ["16.5cm x 18.5cm / 펼쳤을 때 26cm"],
  },
  {
    label: "세척 방법",
    children: [
      "30도 이하의 미지근한 물에서 중성세제로 단독손세탁을 권장",
      "그늘진 곳에 뉘어서 건조",
      "정전기 예방을 위해 섬유유연제로 헹궈주시면 더 좋음",
    ],
  },
];

const shipmentInfoItems = [
  {
    label: "배송비",
    children: [
      "50,000원 이상 구매시 무료배송 (미만시 배송비 2500원 발생) 제주도",
      "를 포함한 도서/산간지역 추가 배송비 없음",
    ],
  },
  {
    label: "배송예정",
    children: [
      <p>
        <span className="text-blue">04/20(화)</span>이내 도착 예정 97%
      </p>,
    ],
  },
];

export default function ProductInfo() {
  const [wishProd, setWishProd] = useState(false);

  return (
    <div className={styles["product-info-wrap"]}>
      <div className={styles["product-img-swiper"]}>
        <Swiper pagination modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className={styles["product-img-swiper__item"]}>
              <img
                src="/assets/images/item-img-01@3x.png"
                alt="product-img-1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["product-img-swiper__item"]}>
              <img
                src="/assets/images/item-img-01@3x.png"
                alt="product-img-1"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles["product-img-list"]}>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
        <div className={styles["product-img-list__item"]}>
          <img src="/assets/images/item-img-01@3x.png" alt="product-img-1" />
        </div>
      </div>
      <div className={styles["product-info"]}>
        <div className={styles["product-info__title-wrap"]}>
          <h3 className={styles["product-info__title-wrap__prod-name"]}>
            [Apparel] what happened beanie
          </h3>
          <div className={styles["product-info__title-wrap__wish"]}>
            <Icons.Heart
              onClick={() => setWishProd(!wishProd)}
              className={clsx(
                styles["product-info__title-wrap__wish__icon"],
                wishProd &&
                  styles["product-info__title-wrap__wish__icon--active"]
              )}
            />
            <span className={styles["product-info__title-wrap__wish__text"]}>
              wish
            </span>
          </div>
        </div>
        <p className={styles["product-info__price"]}>16,000 won</p>
        <div className={styles["product-info__group-info"]}>
          <div className={styles["product-info__divider"]}></div>
          <Descriptions title={"상품 정보"} items={productInfoItems} />
          <DiscountAlert link={"#"}>
            <span>
              지금 왓헤픈 회원가입시{" "}
              <span className="text-orange">3% 할인권 증정</span>
            </span>
          </DiscountAlert>
          <div className={styles["product-info__divider"]}></div>
          <Descriptions title={"배송 정보"} items={shipmentInfoItems} />
          <div className={styles["product-info__divider"]}></div>
          <Select placeholder={"Color: size"} showDropdownIcon />
          <div className={styles["product-info__group-info__group-btn"]}>
            <Button variant="outlined" color="blue" fluid>
              <Link to={AppPath.ShoppingBag}>add cart</Link>
            </Button>
            <Button variant="contained" color="blue" fluid>
              buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
