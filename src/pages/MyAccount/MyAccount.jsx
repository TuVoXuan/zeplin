import React from "react";
import Steps from "../../components/Steps/Steps";
import styles from "./MyAccount.module.scss";
import clsx from "clsx";
import RecentOrderTable from "../../views/MyAccount/RecentOrderTable/RecentOrderTable";
import GridBoxInfo from "../../views/MyAccount/GridBoxInfo/GridBoxInfo";
import NavButton from "../../views/MyAccount/NavButton/NavButton";
import Icons from "../../components/Icons";

const steps = [
  {
    label: "home",
    active: false,
  },
  {
    label: "my account",
    active: true,
  },
];

export default function MyAccount() {
  return (
    <div className={clsx("container", styles["my-account-wrap"])}>
      <h1 className={styles["title"]}>my account</h1>
      <div className={styles["steps"]}>
        <Steps steps={steps} />
      </div>

      <RecentOrderTable />

      <GridBoxInfo>
        <GridBoxInfo.Item>
          <div className={styles["point-info-item"]}>
            <span>- 사용가능적립금</span>
            <span>1,000원</span>
          </div>
          <div className={styles["point-info-item"]}>
            <span>- 사용가능적립금</span>
            <span>0원</span>
          </div>
          <div className={styles["point-info-item"]}>
            <span>- 쿠폰</span>
            <span>0개</span>
          </div>
        </GridBoxInfo.Item>
        <GridBoxInfo.Item>
          <div className={styles["point-info-item"]}>
            <span>- 총구매적립금</span>
            <span>1,000원</span>
          </div>
          <div className={styles["point-info-item"]}>
            <span>- 총주문</span>
            <span>0원</span>
          </div>
        </GridBoxInfo.Item>
      </GridBoxInfo>

      <div className={styles["order-status"]}>
        <h3 className={styles["order-status__title"]}>나의 주문처리 현황</h3>
        <GridBoxInfo>
          <GridBoxInfo.Item>
            <div className={styles["order-status__item"]}>
              <span>입금전</span>
              <span>0</span>
            </div>
          </GridBoxInfo.Item>
          <GridBoxInfo.Item>
            <div className={styles["order-status__item"]}>
              <span>입금전</span>
              <span>0</span>
            </div>
          </GridBoxInfo.Item>
          <GridBoxInfo.Item>
            <div className={styles["order-status__item"]}>
              <span>입금전</span>
              <span>0</span>
            </div>
          </GridBoxInfo.Item>
          <GridBoxInfo.Item>
            <div className={styles["order-status__item"]}>
              <span>배송완료</span>
              <span>0</span>
            </div>
          </GridBoxInfo.Item>
          <GridBoxInfo.Item>
            <div className={styles["order-status__item"]}>
              <span>- 취소 : 0</span>
              <span>- 교환 : 0</span>
              <span>- 반품 : 0</span>
            </div>
          </GridBoxInfo.Item>
        </GridBoxInfo>
      </div>

      <div className={styles["nav-btn-group"]}>
        <NavButton
          icon={<Icons.CreditCard />}
          engText={"ORDER"}
          korText={"주문내역"}
        />
        <NavButton
          icon={<Icons.User />}
          engText={"Profile"}
          korText={"회원정보"}
        />
        <NavButton
          icon={<Icons.Heart />}
          engText={"wishlist"}
          korText={"관심상품"}
        />
        <NavButton
          icon={<Icons.Coupon />}
          engText={"coupon"}
          korText={"쿠폰"}
        />
        <NavButton
          icon={<Icons.Board />}
          engText={"board"}
          korText={"게시물 관리"}
        />
        <NavButton
          icon={<Icons.Truck />}
          engText={"address"}
          korText={"배송 관리"}
        />
      </div>
    </div>
  );
}
