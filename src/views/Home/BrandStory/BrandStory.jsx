import React from "react";
import styles from "./BrandStory.module.scss";
import Button from "../../../components/Button/Button";

export default function BrandStory() {
  return (
    <section className={styles["brand-story"]}>
      <h1 className={styles["brand-story__title"]}>BRAND STORY</h1>
      <p className={styles["brand-story__description"]}>
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </p>

      <div className={styles["brand-story__main"]}>
        <div className={styles["brand-story__main__image"]}>
          <img
            alt="brand-story-img"
            src="/assets/images/brand-story-img.png"
            srcSet="/assets/images/brand-story-img.png 1x,
              /assets/images/brand-story-img@2x.png 2x,
             /assets/images/brand-story-img@3x.png 3x"
          />
        </div>
        <div className={styles["brand-story__main__content"]}>
          <h2 className={styles["brand-story__main__content__title"]}>
            What Happened’s Brand story
          </h2>
          <p className={styles["brand-story__main__content__description"]}>
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
            풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
            살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
            이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
            칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
            끝에 설산에서 황금시대를 이상을 운다.
          </p>
          <Button
            variant="outline"
            className={styles["brand-story__main__content__see-more"]}
          >
            SEE MORE
          </Button>
        </div>
      </div>
      <div className={styles["brand-story__object-05"]}>
        <img
          alt="brand-story-object-05"
          src="/assets/images/brand-story-object-05.png"
          srcSet="/assets/images/brand-story-object-05.png 1x,
              /assets/images/brand-story-object-05@2x.png 2x,
             /assets/images/brand-story-object-05@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-04"]}>
        <img
          alt="brand-story-object-04"
          src="/assets/images/brand-story-object-04.png"
          srcSet="/assets/images/brand-story-object-04.png 1x,
              /assets/images/brand-story-object-04@2x.png 2x,
             /assets/images/brand-story-object-04@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-01"]}>
        <img
          alt="brand-story-object-01"
          src="/assets/images/brand-story-object-01.png"
          srcSet="/assets/images/brand-story-object-01.png 1x,
              /assets/images/brand-story-object-01@2x.png 2x,
             /assets/images/brand-story-object-01@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-07"]}>
        <img
          alt="brand-story-object-07"
          src="/assets/images/brand-story-object-07.png"
          srcSet="/assets/images/brand-story-object-07.png 1x,
              /assets/images/brand-story-object-07@2x.png 2x,
             /assets/images/brand-story-object-07@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-06"]}>
        <img
          alt="brand-story-object-06"
          src="/assets/images/brand-story-object-06.png"
          srcSet="/assets/images/brand-story-object-06.png 1x,
              /assets/images/brand-story-object-06@2x.png 2x,
             /assets/images/brand-story-object-06@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-02"]}>
        <img
          alt="brand-story-object-02"
          src="/assets/images/brand-story-object-02.png"
          srcSet="/assets/images/brand-story-object-02.png 1x,
              /assets/images/brand-story-object-02@2x.png 2x,
             /assets/images/brand-story-object-02@3x.png 3x"
        />
      </div>
      <div className={styles["brand-story__object-03"]}>
        <img
          alt="brand-story-object-03"
          src="/assets/images/brand-story-object-03.png"
          srcSet="/assets/images/brand-story-object-03.png 1x,
              /assets/images/brand-story-object-03@2x.png 2x,
             /assets/images/brand-story-object-03@3x.png 3x"
        />
      </div>
    </section>
  );
}
