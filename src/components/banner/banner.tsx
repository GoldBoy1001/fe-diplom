import "./sryleBanner.scss";
import { useLocation } from "react-router-dom";
import TitleBanner from "./bannerComponents/titleBanner";
import BannerForm from "./bannerComponents/bannerForm/bannerForm";
import Progress_bar from "./bannerComponents/ProgressBar/ProgressBar";

interface ImgBannerProps {
  img: string;
}

export default function Banner({ img }: ImgBannerProps) {
  const { pathname } = useLocation();

  return (
    <>
      <section
        className={
          pathname === "/" ? "main__banner" : "main__banner main__banner-train"
        }
      >
        <div className="banner">
          <div
            className={
              pathname === "/"
                ? "banner__body"
                : "banner__body banner__body-train"
            }
          >
            {pathname === "/" && <TitleBanner />}
            <BannerForm />
            <img className="directions__image" src={img} alt="Banner" />
          </div>
        </div>
        {pathname !== "/" && (
          <div className="progress">
            <div
              className={
                pathname === "/train"
                  ? "progress__item item-progress1 progress1"
                  : "progress__item item-progress1"
              }
            >
              <p className="progress__text">
                <span className="progress__num">1</span>Билеты
              </p>
              <span className="bg"></span>
            </div>
            <div className="progress__item item-progress2">
              <p className="progress__text">
                <span className="progress__num">2</span>Пассажиры
              </p>
              <span className="bg"></span>
            </div>
            <div className="progress__item item-progress3">
              <p className="progress__text">
                <span className="progress__num">3</span>Оплата
              </p>
              <span className="bg"></span>
            </div>
            <div className="progress__item item-progress4">
              <p className="progress__text">
                <span className="progress__num">4</span>Проверка
              </p>
            </div>
          </div>
        )}
      </section>
      {/* <Progress_bar
        bgcolor="#ffaa00"
        progress="30"
        num={"1 Билеты"}
        height={"98px"}
      /> */}
    </>
  );
}
