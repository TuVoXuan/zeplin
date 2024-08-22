import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Icons from "../Icons";

const whatHappened = [
  { label: "[공지] 개인 정보 처리 방침 변경 사전 안내", href: "#" },
  { label: "[공지] 29CM 강남 스토어 영업 종료 ", href: "#" },
  { label: "[공지] 개인 정보 처리 방침 변경 사전 안내", href: "#" },
  { label: "[공지] iOS 10 이하 버전 지원 중단 안내", href: "#" },
  { label: "[공지] 개인 정보 처리 방침 변경 사전 안내", href: "#" },
];
const aboutUs = [
  { label: "회사소개", href: "#" },
  { label: "인재 채용", href: "#" },
  { label: "상시 할인 혜택", href: "#" },
];
const myOrder = [
  { label: "내 주문", href: "#" },
  { label: "주문 배송", href: "#" },
  { label: "취소/ 교환 / 반품 내역", href: "#" },
  { label: "상품 리뷰 내역", href: "#" },
  { label: "증빙 서류 발급", href: "#" },
];
const myAccount = [
  { label: "회원 정보 수정", href: "#" },
  { label: "회원 등급", href: "#" },
  { label: "쿠폰", href: "#" },
  { label: "마일리지 현황", href: "#" },
];
const help = [
  { label: "1: 1 상담 내역", href: "#" },
  { label: "상품 Q&A 내역", href: "#" },
  { label: "공지 사항", href: "#" },
  { label: "자주하는 질문", href: "#" },
  { label: "고객의 소리", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className={clsx(styles.footer, "container")}>
        <div
          className={clsx(
            styles["footer__main-info"],
            styles["footer__info-section"]
          )}
        >
          <h4 className={styles["footer__info-section__title"]}>
            what happened
          </h4>
          <ul className={styles["footer__info-section__list"]}>
            {whatHappened.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer__info-section"]}>
          <h4 className={styles["footer__info-section__title"]}>about us</h4>
          <ul className={styles["footer__info-section__list"]}>
            {aboutUs.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer__info-section"]}>
          <h4 className={styles["footer__info-section__title"]}>my order</h4>
          <ul className={styles["footer__info-section__list"]}>
            {myOrder.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer__info-section"]}>
          <h4 className={styles["footer__info-section__title"]}>my account</h4>
          <ul className={styles["footer__info-section__list"]}>
            {myAccount.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer__info-section"]}>
          <h4 className={styles["footer__info-section__title"]}>help</h4>
          <ul className={styles["footer__info-section__list"]}>
            {help.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={clsx(styles["footer__end-section"], "container")}>
        <div className={styles["footer__copy-right"]}>
          © 2020-2021 what happened corp | (주) 왓헤픈| 대표자 : 홍길동| 사업자
          등록번호 : 356-00-00000 | test0101@what happened.co.kr 서울특별시
          강남구 도산대로 8길 17| FAX : 070-0000-0000 | 서비스 이용약관 |
          개인정보처리방침
        </div>
        <div className={styles["footer__social"]}>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/naver-icon.webp"
              srcSet="/assets/images/naver-icon.webp 1x,
              /assets/images/naver-icon@2x.webp 2x,
             /assets/images/naver-icon@3x.webp 3x"
              alt="naver icon"
            />
          </button>

          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/facebook-icon.webp"
              srcSet="/assets/images/facebook-icon.webp 1x,
              /assets/images/facebook-icon@2x.webp 2x,
             /assets/images/facebook-icon@3x.webp 3x"
              alt="facebook icon"
            />
          </button>
          <button>
            <img
              className={styles["login-wrap__socials__icon"]}
              src="/assets/images/instagram-icon.png"
              srcSet="/assets/images/instagram-icon.png 1x,
              /assets/images/instagram-icon@2x.png 2x,
             /assets/images/instagram-icon@3x.png 3x"
              alt="instagram icon"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
