import React from "react";
import Button from "../../../components/Button/Button";
import Brand from "../../../components/Card/Brand/Brand";
import styles from "./HappenedIssue.module.scss";
import Icons from "../../../components/Icons";

export default function HappenedIssue() {
  return (
    <section className={styles["happened-issue"]}>
      <div className={styles["happened-issue__text-wrap"]}>
        <h1 className={styles["happened-issue__text-wrap__title"]}>
          Happened’s issue
        </h1>
        <p className={styles["happened-issue__text-wrap__description"]}>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <Button
          variant="outline"
          className={styles["happened-issue__text-wrap__see-more"]}
        >
          SEE MORE
        </Button>

        <div className={styles["happened-issue__text-wrap__dice-wrap"]}>
          <div
            className={
              styles["happened-issue__text-wrap__dice-wrap__dice-five-dot"]
            }
          >
            <img
              alt="news-object-03"
              src="/assets/images/news-object-03.png"
              srcSet="/assets/images/news-object-03.png 1x,
              /assets/images/news-object-03@2x.png 2x,
             /assets/images/news-object-03@3x.png 3x"
            />
          </div>
          <div
            className={
              styles["happened-issue__text-wrap__dice-wrap__dive-three-dot"]
            }
          >
            <img
              alt="news-object-02"
              src="/assets/images/news-object-02.png"
              srcSet="/assets/images/news-object-02.png 1x,
              /assets/images/news-object-02@2x.png 2x,
             /assets/images/news-object-02@3x.png 3x"
            />
          </div>
        </div>
      </div>

      <div className={styles["happened-issue__issue-list"]}>
        <div className={styles["happened-issue__whpn-issue"]}>
          <span className={styles["happened-issue__whpn-issue__text"]}>
            whpn issue
          </span>
          <div className={styles["happened-issue__whpn-issue__sign"]}>
            <Icons.ArrowRight
              className={styles["happened-issue__whpn-issue__sign__icon"]}
            />
          </div>
        </div>
        <Brand
          brandName="B Brand"
          nameBg="black"
          thumbnail="/assets/images/news-img-01.png"
        />
        <Brand
          brandName="C Brand"
          nameBg="orange"
          thumbnail="/assets/images/news-img-02.png"
        />
        <Brand
          brandName="D Brand"
          nameBg="black"
          thumbnail="/assets/images/news-img-03.png"
        />
        <Brand
          brandName="D Brand"
          nameBg="black"
          thumbnail="/assets/images/news-img-03.png"
        />
        <div className={styles["happened-issue__issue-list__lol"]}>
          <img
            alt="news-object-05"
            src="/assets/images/news-object-05.png"
            srcSet="/assets/images/news-object-05.png 1x,
              /assets/images/news-object-05@2x.png 2x,
              /assets/images/news-object-05@3x.png 3x"
          />
        </div>
        <div className={styles["happened-issue__issue-list__whpn-coin"]}>
          <img
            alt="news-object-04"
            src="/assets/images/news-object-04.png"
            srcSet="/assets/images/news-object-04.png 1x,
              /assets/images/news-object-04@2x.png 2x,
              /assets/images/news-object-04@3x.png 3x"
          />
        </div>
        <div className={styles["happened-issue__issue-list__hot"]}>
          <img
            alt="news-object-06"
            src="/assets/images/news-object-06.png"
            srcSet="/assets/images/news-object-06.png 1x,
              /assets/images/news-object-06@2x.png 2x,
              /assets/images/news-object-06@3x.png 3x"
          />
        </div>
      </div>
    </section>
  );
}
