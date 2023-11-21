import { useEffect, useState } from "react";
import AccordionDetails from "../../components/accordionDetails/accordionDetails";
import PassengersAccordion from "../../components/passengersAccordion/passengersAccordion";

import "./stylePassengerPage.scss";

import arrow from "../../img/svg/bar-arrow.svg";
import arrow2 from "../../img/svg/bar-arrow2.svg";
import trainArrow from "../../img/svg/train-arrow.svg";
import trainArrow2 from "../../img/svg/train-arrowFrom.svg";
import passenger from "../../img/svg/passenger.svg";
import passangerIcon from "../../img/svg/check-icon.svg";

import { Link, useLocation } from "react-router-dom";
import Tickets from "../tickets/tickets";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ICity } from "../../models/selectModel";

interface PassengersPageProps {
  visible: boolean;
}

export default function PassengersPage({ visible }: PassengersPageProps) {
  const { pathname } = useLocation();
  const [paymentDetail, setPaymentDetail] = useState({
    first_name: "",
    last_name: "",
    patronymic: "",
    phone: "",
    email: "",
    payment_method: "",
  });
  const [formInstances, setFormInstances] = useState<Array<any>>([]);
  const { addDetail, addPersonalData } = useActions();
  const seats = useTypedSelector((state) => state.seats);
  const city = useTypedSelector((state) => state.city);
  const direction = useTypedSelector((state) => state.direction);
  //   const personalData = useTypedSelector((state) => state.personalData);
  const order = useTypedSelector((state) => state.order);
  const [seat] = seats;
  const { adultSeats, childrensPlaces } = seat;
  const { train } =
    direction && direction.length > 0 && typeof direction[0] !== "string"
      ? direction[0]
      : { train: "" };

  const trainNum = train?.replace(/\D/g, "");
  const { city1 = "", city2 = "" } = city[0] as ICity;

  const handleInputChange = (field: string, value: string) => {
    setPaymentDetail((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    // Вызываем onChange с обновленными данными
    // if (onChangeForm) {
    //   onChangeForm({
    // 	 ...formData,
    // 	 [field]: value,
    //   });
    // }
  };

  const adultSeatsNum = parseInt(adultSeats, 10) || 0;
  const childrensNum = parseInt(String(childrensPlaces), 10) || 0;
  const dataSeats = Array.from(
    { length: adultSeatsNum + childrensNum },
    (_, index) => index + 1
  );

  //   useEffect(() => {
  //     addDetail(formInstances);
  //   }, [formInstances]);

  const handleFormChange = (index: number, data: any) => {
    const updatedInstances = [...formInstances];
    updatedInstances[index] = data;
    setFormInstances(updatedInstances);
  };
  console.log(order);

  return (
    <div className="passengers-page">
      <div className="passengers-body">
        <aside className="passengers__bar-details">
          <div className="bar-details">
            <p className="bar-details__title">Детали поездки</p>
            <div className="bar-details__border"></div>
            <div className="bar-details__there">
              <AccordionDetails
                title={"Туда"}
                img={arrow}
                numbers={"№ Поезда"}
                num={trainNum}
                titleDrop={"Название"}
                subtitle={`Адлер \n ${city2}`}
                visible={true}
                arrows={trainArrow}
              />
            </div>
            <div className="bar-details__border"></div>
            <div className="bar-details__back">
              <AccordionDetails
                title={"Обратно"}
                img={arrow2}
                numbers={"№ Поезда"}
                num={"116С"}
                titleDrop={"Название"}
                subtitle={"Адлер \n Санкт-Петербург"}
                visible={true}
                arrows={trainArrow2}
              />
            </div>
            <div className="bar-details__border"></div>
            <div className="bar-details__passengers">
              <AccordionDetails
                title={"Пассажиры"}
                img={passenger}
                numbers={`${adultSeats} Взрослых`}
                num={"5 840"}
                titleDrop={!childrensPlaces ? "" : `${childrensPlaces} Ребенок`}
                sum={!childrensPlaces ? "" : "1 920"}
                visible={false}
                arrows=""
              />
            </div>
            <div className="bar-details__border"></div>
            <div className="bar-details__total">
              <span>Итог</span>
              {"7 760"}
            </div>
          </div>
        </aside>
        {visible && (
          <section className="content__passengers">
            <div className="passengers">
              {dataSeats.map((num, index) => (
                <PassengersAccordion
                  title={"Пассажир"}
                  number={num}
                  key={num}
                  onChangeForm={(data: any) => handleFormChange(index, data)}
                />
              ))}
              <PassengersAccordion title={"Добавить пассажира"} />
              <Link
                to={"/payment"}
                className="passengers__btn"
                onClick={() => addDetail(formInstances)}
              >
                КУПИТЬ БИЛЕТЫ
              </Link>
            </div>
          </section>
        )}
        {pathname === "/payment" && (
          <>
            <section className="personal-data">
              <p className="personal-data__title">Персональные данные</p>
              <div className="personal-data__border"></div>
              <form className="personal-data__form" action="#">
                <div className="form-personal">
                  <div className="form-personal__body">
                    <div className="form-personal__surname">
                      <label
                        htmlFor="form-personal-surname"
                        className="form-personal__label"
                      >
                        Фамилия
                      </label>
                      <input
                        type="text"
                        id="form-personal-surname"
                        className="form-personal__input"
                        placeholder="Фамилия"
                        value={paymentDetail.last_name}
                        onChange={(e) =>
                          handleInputChange("last_name", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-personal__name">
                      <label
                        htmlFor="form-personal-name"
                        className="form-personal__label"
                      >
                        Имя
                      </label>
                      <input
                        type="text"
                        id="form-personal-name"
                        className="form-personal__input"
                        placeholder="Имя"
                        value={paymentDetail.first_name}
                        onChange={(e) =>
                          handleInputChange("first_name", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-personal__patronymic">
                      <label
                        htmlFor="form-personal-patronymic"
                        className="form-personal__label"
                      >
                        Отчество
                      </label>
                      <input
                        type="text"
                        id="form-personal-patronymic"
                        className="form-personal__input"
                        placeholder="Отчество"
                        value={paymentDetail.patronymic}
                        onChange={(e) =>
                          handleInputChange("patronymic", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-personal__tel">
                      <label
                        htmlFor="form-personal-tel"
                        className="form-personal__label"
                      >
                        Контактный телефон
                      </label>
                      <input
                        type="tel"
                        id="form-personal-tel"
                        className="form-personal__input"
                        placeholder="+7 ___ ___ __ __"
                        value={paymentDetail.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-personal__email">
                      <label
                        htmlFor="form-personal-email"
                        className="form-personal__label"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="form-personal-email"
                        className="form-personal__input"
                        placeholder="inbox@gmail.ru"
                        value={paymentDetail.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-personal__payment payment-personal">
                    <div className="payment-personal">
                      <div className="personal-data__border"></div>
                      <p className="payment-personal__title">Способ оплаты</p>
                      <div className="personal-data__border"></div>
                      <div className="payment-personal__body">
                        <div className="payment-personal__checkbox">
                          <input
                            type="checkbox"
                            className="payment-personal__input"
                            value={paymentDetail.payment_method}
                            onChange={(e) =>
                              handleInputChange(
                                "payment_method",
                                e.target.checked ? "online" : "cash"
                              )
                            }
                          />
                          <span className="payment-personal__input-text">
                            Онлайн
                          </span>
                        </div>
                        <div className="payment-personal__type type-card">
                          Банковской картой
                        </div>
                        <div className="payment-personal__type type-paypal">
                          PayPal
                        </div>
                        <div className="payment-personal__type type-qiwi">
                          Visa QIWI Wallet
                        </div>
                      </div>
                      <div className="personal-data__border"></div>
                      <div className="payment-personal__checkbox cash">
                        <input
                          type="checkbox"
                          className="payment-personal__input"
                          value={paymentDetail.payment_method}
                          onChange={(e) =>
                            handleInputChange(
                              "payment_method",
                              e.target.checked ? "cash" : "cash"
                            )
                          }
                        />
                        <span className="payment-personal__input-text">
                          Наличными
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
            <Link
              to={"/check"}
              className="personal-data__btn"
              onClick={() =>
                addPersonalData({
                  first_name: paymentDetail.first_name,
                  last_name: paymentDetail.last_name,
                  patronymic: paymentDetail.patronymic,
                  phone: paymentDetail.phone,
                  email: paymentDetail.email,
                  payment_method: paymentDetail.payment_method,
                })
              }
            >
              КУПИТЬ БИЛЕТЫ
            </Link>
          </>
        )}
        {pathname === "/check" && (
          <section className="details-check">
            <div className="details-ticket">
              <p className="details-ticket__title">Поезд</p>
              {/* <Tickets btn={"Изменить"} onSelectPlaces={() => ""} /> */}
            </div>
            <div className="check-details">
              <div className="check-details__passengers">
                <p className="check-details__passengers-title">Пассажиры</p>
                <div className="check-details__passengers-list">
                  <div className="list-passengers">
                    <div className="list-passengers__item">
                      {order.map((passenger, i) => (
                        <div className="item-passenger" key={i}>
                          <div className="item-passenger__icon">
                            <img
                              className="item-passenger__icon-img"
                              src={passangerIcon}
                              alt="Icon"
                            />
                            <span className="item-passenger__icon-type">
                              {passenger.is_adult ? "Детский" : "Взрослый"}
                            </span>
                          </div>
                          <div className="item-passenger__descriptions">
                            <span className="descriptions-passenger__name">
                              {`${passenger.last_name} ${passenger.name} ${passenger.patronymic}`}
                            </span>
                            <span className="descriptions-passenger__gender">
                              Пол {""}
                              {passenger.gender === "woman"
                                ? "Женский"
                                : "Мужской"}
                            </span>
                            <span className="descriptions-passenger__date">
                              Дата рождения{" "}
                              {passenger.birthday.replace(/-/g, ".")}
                            </span>
                            <span className="descriptions-passenger__document">
                              {passenger.document_type === "svid"
                                ? "Свидетельство о рождении"
                                : "Паспорт РФ"}{" "}
                              {""}
                              {passenger.document_dataSeries} {""}
                              {passenger.document_data}
                            </span>
                          </div>
                        </div>
                      ))}
                      {/* <div className="item-passenger">
                        <div className="item-passenger__icon">
                          <img
                            className="item-passenger__icon-img"
                            src={passangerIcon}
                            alt="Icon"
                          />
                          <span className="item-passenger__icon-type">
                            Взрослый
                          </span>
                        </div>
                        <div className="item-passenger__descriptions">
                          <span className="descriptions-passenger__name">
                            Мартынюк Ирина Эдуардовна
                          </span>
                          <span className="descriptions-passenger__gender">
                            Пол женский
                          </span>
                          <span className="descriptions-passenger__date">
                            Дата рождения 17.02.1985
                          </span>
                          <span className="descriptions-passenger__document">
                            Паспорт РФ 4204 380694
                          </span>
                        </div>
                      </div> */}
                      {/* <div className="item-passenger">
                        <div className="item-passenger__icon">
                          <img
                            className="item-passenger__icon-img"
                            src={passangerIcon}
                            alt="Icon"
                          />
                          <span className="item-passenger__icon-type">
                            Взрослый
                          </span>
                        </div>
                        <div className="item-passenger__descriptions">
                          <span className="descriptions-passenger__name">
                            Мартынюк Ирина Эдуардовна
                          </span>
                          <span className="descriptions-passenger__gender">
                            Пол женский
                          </span>
                          <span className="descriptions-passenger__date">
                            Дата рождения 17.02.1985
                          </span>
                          <span className="descriptions-passenger__document">
                            Паспорт РФ 4204 380694
                          </span>
                        </div>
                      </div>
                      <div className="item-passenger">
                        <div className="item-passenger__icon">
                          <img
                            className="item-passenger__icon-img"
                            src={passangerIcon}
                            alt="Icon"
                          />
                          <span className="item-passenger__icon-type">
                            Взрослый
                          </span>
                        </div>
                        <div className="item-passenger__descriptions">
                          <span className="descriptions-passenger__name">
                            Мартынюк Ирина Эдуардовна
                          </span>
                          <span className="descriptions-passenger__gender">
                            Пол женский
                          </span>
                          <span className="descriptions-passenger__date">
                            Дата рождения 17.02.1985
                          </span>
                          <span className="descriptions-passenger__document">
                            Паспорт РФ 4204 380694
                          </span>
                        </div>
                      </div> */}
                    </div>
                    <div className="list-passengers__total">
                      <div className="total-passengers">
                        <span className="total-passengers__price">
                          <span>Всего</span> 7 760
                        </span>
                        <span className="total-passengers__btn">Изменить</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="check-payment">
              <p className="check-payment__tile">Способ оплаты</p>
              <div className="check-payment__body">
                <span className="check-payment__type">Наличными</span>
                <div className="check-payment__button">
                  <span className="check-payment__btn">Изменить</span>
                </div>
              </div>
            </div>
            <Link to={"/order"} className="check-btn">
              подтвердить
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
