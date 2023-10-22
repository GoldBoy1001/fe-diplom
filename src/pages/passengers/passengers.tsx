import AccordionDetails from "../../components/accordionDetails/accordionDetails";
import Banner from "../../components/banner/banner";
import PassengersAccordion from "../../components/passengersAccordion/passengersAccordion";

import "./stylePassenger.scss";

import arrow from "../../img/svg/bar-arrow.svg";
import arrow2 from "../../img/svg/bar-arrow2.svg";
import passenger from "../../img/svg/passenger.svg";
import banner from "../../img/baner1.jpg";

export default function Passengers() {
  return (
    <>
      <Banner img={banner} />
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
                  num={"116С"}
                  titleDrop={"Название"}
                  subtitle={"Адлер \n Санкт-Петербург"}
                  visible={true}
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
                />
              </div>
              <div className="bar-details__border"></div>
              <div className="bar-details__passengers">
                <AccordionDetails
                  title={"Пассажиры"}
                  img={passenger}
                  numbers={"2 Взрослых"}
                  num={"5 840"}
                  titleDrop={"1 Ребенок"}
                  sum={"1 920"}
                  visible={false}
                />
              </div>
              <div className="bar-details__border"></div>
              <div className="bar-details__total">
                <span>Итог</span>
                {"7 760"}
              </div>
            </div>
          </aside>
          <section className="content__passengers">
            <div className="passengers">
              <PassengersAccordion title={"Пассажир 1"} />
              <PassengersAccordion title={"Пассажир 2"} />
              <PassengersAccordion title={"Пассажир 3"} />
              <PassengersAccordion title={"Добавить пассажира"} />
              <span className="passengers__btn">КУПИТЬ БИЛЕТЫ</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
