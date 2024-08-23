import React from "react";
import Button from "../../../components/Button/Button";
import Icons from "../../../components/Icons";
import styles from "./VideoIssue.module.scss";

export default function VideoIssue() {
  return (
    <section className={styles["video-issue"]}>
      <h1 className={styles["video-issue__title"]}>what happened</h1>
      <p className={styles["video-issue__description"]}>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </p>
      <Button variant="outline" className={styles["video-issue__see-more"]}>
        SEE MORE
      </Button>

      <div className={styles["video-issue__window-web"]}>
        <div className={styles["video-issue__window-web__tool-bar"]}>
          <Icons.Diamond
            className={styles["video-issue__window-web__tool-bar__diamond"]}
          />
          <span className={styles["video-issue__window-web__tool-bar__title"]}>
            what happened
          </span>
          <div
            className={
              styles["video-issue__window-web__tool-bar__horizontal-dash"]
            }
          ></div>
          <Icons.Close
            className={styles["video-issue__window-web__tool-bar__close"]}
          />
        </div>
        <div className={styles["video-issue__window-web__nav-bar"]}>
          <span
            className={styles["video-issue__window-web__nav-bar__url-address"]}
          >
            www. whpn.com/brandstory
          </span>
          <Icons.ArrowRight
            className={styles["video-issue__window-web__nav-bar__forward"]}
          />
        </div>
        <div className={styles["video-issue__window-web__content"]}>
          <img src="/assets/images/video-img-01.jpg" alt="video-img-01" />
        </div>
      </div>

      <div className={styles["video-issue__video-object-05"]}>
        <img
          alt="video-object-05"
          src="/assets/images/video-object-05.png"
          srcSet="/assets/images/video-object-05.png 1x,
              /assets/images/video-object-05@2x.png 2x,
              /assets/images/video-object-05@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-06"]}>
        <img
          alt="video-object-06"
          src="/assets/images/video-object-06.png"
          srcSet="/assets/images/video-object-06.png 1x,
              /assets/images/video-object-06@2x.png 2x,
              /assets/images/video-object-06@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-07"]}>
        <img
          alt="video-object-07"
          src="/assets/images/video-object-07.png"
          srcSet="/assets/images/video-object-07.png 1x,
              /assets/images/video-object-07@2x.png 2x,
              /assets/images/video-object-07@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-08"]}>
        <img
          alt="video-object-08"
          src="/assets/images/video-object-08.png"
          srcSet="/assets/images/video-object-08.png 1x,
              /assets/images/video-object-08@2x.png 2x,
              /assets/images/video-object-08@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-09"]}>
        <img
          alt="video-object-09"
          src="/assets/images/video-object-09.png"
          srcSet="/assets/images/video-object-09.png 1x,
              /assets/images/video-object-09@2x.png 2x,
              /assets/images/video-object-09@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-04"]}>
        <img
          alt="video-object-04"
          src="/assets/images/video-object-04.png"
          srcSet="/assets/images/video-object-04.png 1x,
              /assets/images/video-object-04@2x.png 2x,
              /assets/images/video-object-04@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-03"]}>
        <img
          alt="video-object-03"
          src="/assets/images/video-object-03.png"
          srcSet="/assets/images/video-object-03.png 1x,
              /assets/images/video-object-03@2x.png 2x,
              /assets/images/video-object-03@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-01"]}>
        <img
          alt="video-object-01"
          src="/assets/images/video-object-01.png"
          srcSet="/assets/images/video-object-01.png 1x,
              /assets/images/video-object-01@2x.png 2x,
              /assets/images/video-object-01@3x.png 3x"
        />
      </div>
      <div className={styles["video-issue__video-object-02"]}>
        <img
          alt="video-object-02"
          src="/assets/images/video-object-02.png"
          srcSet="/assets/images/video-object-02.png 1x,
              /assets/images/video-object-02@2x.png 2x,
              /assets/images/video-object-02@3x.png 3x"
        />
      </div>
    </section>
  );
}
