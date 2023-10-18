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
// import InputDate from "../components/banner/bannerComponents/bannerForm/inputDate/inputDate";
// import Switch from "../components/switch/switch";
// import AccordionItem from "../components/accordion/accordionItem";
// import arrow from "../img/svg/bar-arrow.svg";
// import arrow2 from "../img/svg/bar-arrow2.svg";
// import RecentTickets from "../components/recentTickets/recentTickets";

export default function TrainSelection() {
  const [selectPlaces, setSelectPlaces] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countPage, setCountPage] = useState(1);
  const [countriesPage] = useState(5);
  const lastCountryIndex = countPage * countriesPage;
  const firstCountryIndex = lastCountryIndex - countriesPage;
  //   const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);
  const { showBy } = useTypedSelector((state) => state);

  //   const [values, setValue] = useState<number[]>([0, 7000]);

  return (
    <>
      <Banner img={banner} />
      <section className="content">
        <div className="content__body">
          <section className="content__passengers">
            <div className="passengers">
              <PassengersAccordion />
            </div>
          </section>

          {/* {!selectPlaces && <Filters />}
          <SideBar />
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
          {selectPlaces && (
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
            </section>
          )} */}
        </div>
      </section>
    </>
  );
}
