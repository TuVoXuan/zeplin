import React from "react";
import styles from "./Introduce.module.scss";
import clsx from "clsx";

export default function Introduce() {
  return (
    <div className={styles["introduce-wrap"]}>
      <div className={styles["banner"]}>
        <h1 className={styles["banner__title"]}>What Happened!</h1>
        <div className={styles["banner__description"]}>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed.
          </p>
          <p>
            Take the first step to your brand's success. How to create
            mobile-optimized videos in minutes.
          </p>
        </div>
      </div>
      <div className={styles["nav-wrap"]}>
        <div
          className={clsx(
            styles["nav-wrap__item"],
            styles["nav-wrap__item--active"]
          )}
        >
          about
        </div>
        <div className={clsx(styles["nav-wrap__item"])}>contact us</div>
        <div className={clsx(styles["nav-wrap__item"])}>Campaign</div>
        <div className={clsx(styles["nav-wrap__item"])}>story</div>
        <div className={clsx(styles["nav-wrap__item"])}>Toon</div>
      </div>

      <div className={clsx("container", styles["text-content-wrap"])}>
        <div className={styles["what-happenned-to"]}>
          <h1 className={styles["what-happenned-to__title"]}>
            what happnned to?
          </h1>
          <div className={styles["what-happenned-to__description-kor"]}>
            <p>'WHAT HAPPENED의 이야기는 우리들의 살아가는</p>
            <p>'WHAT HAPPEND TO?' 라는 마음으로</p>
            <p>'무엇'을 모티브로 하여 다양한작업을 하고 있습니다.</p>
            <p>
              일상속의 작은 물건들이 ~할 수 있으며 있으며, 일상속의 작은
              물건들이 ~할 수
            </p>
            <p>
              일상속의 작은 물건들이~할 수 있으며 있으며, 일상속의 작은 물건들이
              ~할 수 있으며
            </p>
            <p>일상속의 작은 물건들이 ~할 수 있으며 있으며, 중심으로</p>
            <p>당신의 삶을 더 행복하게 만드는,</p>
            <p>
              친절하고 다정하며 공감이 되는 디자인을 하는 것이 왓해픈의 방향성
              입니다.
            </p>
          </div>
          <div className={styles["what-happenned-to__description-eng"]}>
            <p>
              "what happened to" wants to make tour everyday, "oh happy day!"
            </p>
            <p>we design daily items that can make you smile,</p>
            <p>
              believing that small things can bring you big joy, Thank you, as
              always!
            </p>
          </div>
        </div>

        <div className={styles["contact-us"]}>
          <h1 className={styles["contact-us__title"]}>contact us</h1>
          <div className={styles["contact-us__text-content"]}>
            <p>서울특별시 강남구 도산대로 8길 17 2층</p>
            <p>2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul</p>
            <p>+82 2 000 0000</p>
            <p>wht30@gmail.com</p>
          </div>
        </div>

        <div className={styles["partnership"]}>
          <h1 className={styles["partnership__title"]}>partnership</h1>

          <div className={styles["partnership__text-content"]}>
            <p>서울특별시 강남구 도산대로 8길 17 2층</p>
            <p>2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul</p>
            <p>+82 2 000 0000</p>
            <p>wht30@gmail.com</p>
          </div>
        </div>

        <div className={styles["introduce-img"]}>
          <img
            src="/assets/images/introduce-img.png"
            srcSet="/assets/images/introduce-img.png,
              /assets/images/introduce-img@2x.png 2x,
             /assets/images/introduce-img@3x.png 3x"
            alt="introduce-image"
          />
        </div>
      </div>
    </div>
  );
}
