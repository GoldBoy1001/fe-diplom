import { Link } from "react-router-dom";
import "./styleFooter.scss";
import { useEffect, useState } from "react";

import btnTop from "../../img/svg/arrow.svg";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <footer className="footer" id="#footer">
      <div className="footer__body">
        <div className="footer__column column-connection">
          <p className="column-connection__title column-title">
            Свяжитесь с нами
          </p>
          <a
            href="tel:88000000000"
            className="column-connection__phone column-text"
          >
            8 (800) 000 00 00
          </a>
          <a
            href="mailto:inbox@mail.ru"
            className="column-connection__mail column-text"
          >
            inbox@mail.ru
          </a>
          <a
            href="skype:username?call"
            className="column-connection__scipe column-text"
          >
            tu.train.tickets
          </a>
          <a href="#" className="column-connection__adress column-text">
            г. Москва ул. Московская 27-35 555 555
          </a>
        </div>
        <div className="footer__column column-subscriptions">
          <p className="column-subscriptions__title column-title">Подписка</p>
          <form className="column-subscriptions__form" action="#">
            <label
              className="column-subscriptions__label column-text"
              htmlFor="subscriptions"
            >
              Будьте в курсе событий
            </label>
            <input
              className="column-subscriptions__input"
              id="subscriptions"
              type="email"
              placeholder="e-mail"
            />
            <button className="column-subscriptions__btn">отправить</button>
          </form>
          <div className="column-subscriptions__subscription column-subscription">
            <p className="column-subscription__title column-title">
              {" "}
              Подписывайтесь на нас
            </p>
            <a
              href="https://www.youtube.com/"
              className="column-subscription__social social-youtube"
              target="blank"
            ></a>
            <a
              href="#"
              className="column-subscription__social social-in"
              target="blank"
            ></a>
            <a
              href="https://www.google.com/"
              className="column-subscription__social social-google"
              target="blank"
            ></a>
            <a
              href="http://www.facebook.com/"
              className="column-subscription__social social-facebook"
              target="blank"
            ></a>
            <a
              href="http://www.twitter.com/"
              className="column-subscription__social social-twitter"
              target="blank"
            ></a>
          </div>
        </div>
      </div>
      <span className="footer__line"></span>
      <div className="footer__nav nav-footer">
        <div className="nav-footer">
          <Link to={"/"} className="nav-footer__logo">
            Лого
          </Link>

          {showButton && (
            <div className="nav-footer__button">
              <img
                onClick={scrollToTop}
                className="nav-footer__btn"
                src={btnTop}
                alt="Кнопка вверх"
              />
            </div>
          )}
          <div className="nav-footer__date">2018 WEB</div>
        </div>
      </div>
    </footer>
  );
}
