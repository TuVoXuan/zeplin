import React from "react";
import styles from "./Home.module.scss";
import Icons from "../../components/Icons/index";
import BestProductCard from "../../components/Card/BestProductCard/BestProductCard";
import clsx from "clsx";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import Brand from "../../components/Card/Brand/Brand";

export default function Home() {
  return (
    <div className={styles["home-wrap"]}>
      <section className={styles["main-banner"]}>
        <h2 className={styles["main-banner__launching-event"]}>
          launching open event!
        </h2>
        <h1 className={styles["main-banner__what-happened"]}>
          What happened! mar-ket
        </h1>
        <div className={styles["main-banner__steps"]}>
          <div>Lorem Ipsum</div>
          <div>
            <Icons.ArrowRight className={styles["main-banner__steps__icon"]} />
          </div>
          <div className={styles["main-banner__steps__market-launching"]}>
            Market Launching!
          </div>
          <div>
            <Icons.ArrowRight className={styles["main-banner__steps__icon"]} />
          </div>
          <div className={styles["main-banner__steps__last"]}>Lorem Ipsum</div>
        </div>
      </section>
      <section className={styles["introduction"]}>
        <h1 className={styles["introduction__title"]}>WHAT HAPPENED!</h1>
        <p className={styles["introduction__description"]}>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </p>
      </section>
      <section className={styles["best-product"]}>
        <h1 className={styles["best-product__title"]}>BEST PRODUCT</h1>
        <p className={styles["best-product__description"]}>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>

        <div className={styles["best-product__list"]}>
          <BestProductCard
            orderNumber="01"
            link="#"
            thumbnail={"assets/images/best-image-01.png"}
          />
          <BestProductCard
            orderNumber="02"
            link="#"
            thumbnail={"assets/images/best-image-02.png"}
          />
          <BestProductCard
            orderNumber="03"
            link="#"
            thumbnail={"assets/images/best-image-03.png"}
          />
        </div>
      </section>
      <section className={clsx("container", styles["product-list"])}>
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
        />
        <div className={styles["product-list__see-more"]}>
          <Button variant="outline">SEE MORE</Button>
        </div>
      </section>
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
      <section className={styles["video-issue"]}>
        <h1 className={styles["video-issue__title"]}>what happened</h1>
        <p className={styles["video-issue__description"]}>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <Button variant="outline" className={styles["video-issue__see-more"]}>
          SEE MORE
        </Button>

        <div className={styles["video-issue__window-web"]}>
          <div className={styles["video-issue__window-web__tool-bar"]}>
            <Icons.Diamond
              className={styles["video-issue__window-web__tool-bar__diamond"]}
            />
            <span
              className={styles["video-issue__window-web__tool-bar__title"]}
            >
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
              className={
                styles["video-issue__window-web__nav-bar__url-address"]
              }
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
    </div>
  );
}
