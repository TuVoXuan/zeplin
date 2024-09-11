import React from "react";
import styles from "./Order.module.scss";
import clsx from "clsx";
import Steps from "../../components/Steps/Steps";
import InfoSection from "../../components/InfoSection/InfoSection";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useResponsive from "../../hook/useResponsive";
import PhoneNumberInput from "../../components/Input/PhoneNumber/PhoneNumber";
import Checkbox from "../../components/Input/Checkbox/Checkbox";
import Select from "../../components/Select/Select";
import PaymentMethodList from "../../views/Order/PaymentMethodList/PaymentMethodList";
import OrderInfo from "../../views/Order/OrderInfo/OrderInfo";
import { Link } from "react-router-dom";
import * as yup from "yup";

const steps = [
  {
    label: "shopping bag",
    active: false,
  },
  {
    label: "order",
    active: true,
  },
  {
    label: "order confirmed",
    active: false,
  },
];

const paymentMethods = [
  { label: "신용/체크카드", value: "credit_debit_card" },
  { label: "현대카드", value: "hyundai_card" },
  { label: "실시간계좌이체", value: "real_time_account_transfer" },
  { label: "무통장 입금", value: "non_account_deposit" },
  { label: "휴대폰 결제", value: "mobile_payment" },
  { label: "네이버 페이", value: "naver_pay" },
  { label: "카카오페이", value: "kakao_pay" },
  { label: "페이코", value: "payco" },
  { label: "삼성페이", value: "samsung_pay" },
  { label: "토스", value: "toss" },
];

export default function Order() {
  const screenSize = useResponsive();

  return (
    <form>
      <div className={clsx("container", styles["order-wrap"])}>
        <h1 className={styles["title"]}>order</h1>
        <div className={styles["content-wrap"]}>
          <div className={styles["form-section"]}>
            <div className={styles["steps"]}>
              <Steps steps={steps} />
            </div>

            <InfoSection
              title={"주문자 정보"}
              className={styles["orderer-info"]}
            >
              <p>김형준 +82)10 - 0000-0000</p>
              <p className={styles["orderer-info__text-blue"]}>본인인증 완료</p>
            </InfoSection>

            <InfoSection
              title={"배송정보"}
              headRightChildren={
                <p className={styles["shipping-info__note-text"]}>
                  <span>*</span> 표시는 필수입력 항목
                </p>
              }
              className={styles["shipping-info"]}
            >
              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>
                  배송지 선택
                </label>
                <div className={styles["form-item__input-wrap"]}>
                  <Input
                    fluid
                    className={clsx(screenSize !== "xs" && styles["width-80"])}
                  />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>
                  수령인{" "}
                  <span className={styles["form-item__label--required"]}>
                    *
                  </span>
                </label>
                <div className={styles["form-item__input-wrap"]}>
                  <Input
                    fluid
                    className={clsx(screenSize !== "xs" && styles["width-80"])}
                  />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>
                  배송지{" "}
                  <span className={styles["form-item__label--required"]}>
                    *
                  </span>
                </label>
                <div className={styles["form-item__input-wrap"]}>
                  <div
                    className={clsx(
                      styles["post-code-box"],
                      screenSize !== "xs" && styles["width-80"]
                    )}
                  >
                    <Input fluid className={styles["post-code-box__input"]} />
                    <Button
                      variant="outlined"
                      color="black"
                      className={styles["post-code-box__button"]}
                    >
                      우편번호 검색
                    </Button>
                  </div>
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}></label>
                <div className={styles["form-item__input-wrap"]}>
                  <Input
                    fluid
                    className={clsx(screenSize !== "xs" && styles["width-90"])}
                  />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>
                  연락처1{" "}
                  <span className={styles["form-item__label--required"]}>
                    *
                  </span>
                </label>
                <div className={styles["form-item__input-wrap"]}>
                  <PhoneNumberInput
                    className={screenSize !== "xs" && styles["width-60"]}
                  />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>연락처2</label>
                <div className={styles["form-item__input-wrap"]}>
                  <PhoneNumberInput
                    className={screenSize !== "xs" && styles["width-60"]}
                  />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}></label>
                <div className={styles["form-item__input-wrap"]}>
                  <Checkbox>배송지를 배송지 목록에 추가합니다. </Checkbox>
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}></label>
                <div className={styles["form-item__input-wrap"]}>
                  <Select
                    placeholder={"배송시 요청사항을 선택해 주세요."}
                    className={clsx(screenSize !== "xs" && styles["width-90"])}
                  />
                </div>
              </div>
            </InfoSection>

            <InfoSection
              title={"쿠폰 / 마일리지"}
              className={styles["coupon-section"]}
            >
              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>쿠폰</label>
                <div className={styles["form-item__input-wrap"]}>
                  <Input fluid />
                </div>
              </div>

              <div className={styles["form-item"]}>
                <label className={styles["form-item__label"]}>마일리지</label>
                <div className={styles["form-item__input-wrap"]}>
                  <Input fluid />
                </div>
              </div>
            </InfoSection>

            <InfoSection
              title={"결제방법"}
              className={styles["payment-method-section"]}
            >
              <PaymentMethodList paymentMethods={paymentMethods} />
            </InfoSection>
          </div>

          <div className={styles["product-info-section"]}>
            <InfoSection title={"주문정보"}>
              <OrderInfo />
            </InfoSection>

            <div className={styles["agree-policy-section"]}>
              <Checkbox>
                상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에 동의합니다.
                (필수)
              </Checkbox>

              <div className={styles["agree-policy-section__policy-links"]}>
                <Link className={styles["agree-policy-section__link"]} to={"#"}>
                  개인정보 처리 방침 & 이용약관
                </Link>
                <Link className={styles["agree-policy-section__link"]} to={"#"}>
                  결제대행 서비스 이용약관 (주)KG이니시스, (주)토스페이먼츠
                </Link>
              </div>
            </div>

            <Button
              variant="contained"
              color="blue"
              fluid
              className={styles["checkout-btn"]}
            >
              check out
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
