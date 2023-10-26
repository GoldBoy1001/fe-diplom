import Banner from "../components/banner/banner";

import banner from "../img/banner.jpg";
import "./styleOrder.scss";

import mail from "../img/svg/order-mail.svg";
import print from "../img/svg/order-print.svg";
import document from "../img/svg/order-docs.svg";

export default function SuccessfulOrder() {
  return (
    <>
      <Banner img={banner} />
      <section className="order">
        <div className="order__title">Благодарим Вас за заказ!</div>
        <div className="order__body">
          <div className="order-card">
            <div className="order-card__header">
              <div className="header-order">
                <span className="header-order__number">№Заказа 285АА</span>
                <span className="header-order__sum">
                  <span>сумма</span> 7 760
                </span>
              </div>
            </div>
            <div className="order-card__actions">
              <div className="actions-order">
                <div className="actions-order__image">
                  <img className="actions-order__img" src={mail} alt="Icon" />
                </div>
                <div className="actions-order__text">
                  билеты будут отправлены на ваш <span>e-mail</span>
                </div>
              </div>
              <div className="actions-order">
                <div className="actions-order__image">
                  <img
                    className="actions-order__img"
                    src={document}
                    alt="Icon"
                  />
                </div>
                <div className="actions-order__text">
                  <span> распечатайте</span> и сохраняйте билеты до даты поездки
                </div>
              </div>
              <div className="actions-order">
                <div className="actions-order__image">
                  <img className="actions-order__img" src={print} alt="Icon" />
                </div>
                <div className="actions-order__text">
                  <span>предьявите</span> распечатанные билеты при посадке
                </div>
              </div>
            </div>
            <div className="order-card__appeal">
              <div className="appeal-order">
                <div className="appeal-order__title">Ирина Эдуардовна!</div>
                <p className="appeal-order__text">
                  Ваш заказ успешно оформлен. В ближайшее время с вами свяжется
                  наш оператор для подтверждения.
                  <span>
                    Благодарим Вас за оказанное доверие и желаем приятного
                    путешествия!
                  </span>
                </p>
              </div>
            </div>
            <div className="order-card__footer">
              <div className="footer-order">
                <div className="footer-order__service">Оценить сервис</div>
                <div className="footer-order__btn">вернуться на главную</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
