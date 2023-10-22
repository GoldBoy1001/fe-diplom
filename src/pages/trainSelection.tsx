import Tickets from "../components/tickets/tickets";
import Banner from "../components/banner/banner";
// import ReactSlider from "react-slider";

import "./styleTrain.scss";
import banner from "../img/baner1.jpg";
import Filters from "../components/filters/filters";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination/pagination";
import { useTypedSelector } from "../hooks/useTypedSelector";
import SideBar from "../components/sideBar/sideBar";
import ChoiceOfPlaces from "../components/choiceOfPlaces/choiceOfPlaces";
import PassengersAccordion from "../components/passengersAccordion/passengersAccordion";
import AccordionDetails from "../components/accordionDetails/accordionDetails";
// import InputDate from "../components/banner/bannerComponents/bannerForm/inputDate/inputDate";
// import Switch from "../components/switch/switch";
// import AccordionItem from "../components/accordion/accordionItem";
import arrow from "../img/svg/bar-arrow.svg";
import arrow2 from "../img/svg/bar-arrow2.svg";
import passenger from "../img/svg/passenger.svg";
// import DepartureDetails from "../components/accordionDetails/accordionDetailsComponents/departureDetails";
// import RecentTickets from "../components/recentTickets/recentTickets";

export default function TrainSelection() {
  const [selectPlaces, setSelectPlaces] = useState(false);
  //   const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countPage, setCountPage] = useState(1);
  const [countriesPage] = useState(5);
  const [further, setFurther] = useState(false);
  const lastCountryIndex = countPage * countriesPage;
  //   const firstCountryIndex = lastCountryIndex - countriesPage;
  //   const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);
  const { showBy } = useTypedSelector((state) => state);

  //   const [values, setValue] = useState<number[]>([0, 7000]);

  return (
    <>
      <Banner img={banner} onFurther={further} />
      <section className="content">
        <div className="content__body">
          {further && (
            <aside className="content__bar-details">
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
          )}
          {further && (
            <section className="content__passengers">
              <div className="passengers">
                <PassengersAccordion title={"Пассажир 1"} />
                <PassengersAccordion title={"Пассажир 2"} />
                <PassengersAccordion title={"Пассажир 3"} />
                <PassengersAccordion title={"Добавить пассажира"} />
                <span className="passengers__btn">КУПИТЬ БИЛЕТЫ</span>
              </div>
            </section>
          )}

          {!selectPlaces && <Filters />}
          {!further && <SideBar />}
          {!selectPlaces && (
            <section className="content__tickets">
              <Tickets
                length={showBy}
                loading={loading}
                onSelectPlaces={() => setSelectPlaces(true)}
              />
              <Pagination TotalCount={15} countriesPage={countriesPage} />
            </section>
          )}
          {selectPlaces && !further && (
            <section className="content__choice-of-places">
              <p className="choice-of-places__title">Выбор мест</p>
              <ChoiceOfPlaces
                onAnoterTrains={() => setSelectPlaces(false)}
                end=""
              />
              <ChoiceOfPlaces
                onAnoterTrains={() => setSelectPlaces(false)}
                end="end"
              />
              <span
                onClick={() => setFurther(true)}
                className="choice-of-places-btn"
              >
                ДАЛЕЕ
              </span>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
