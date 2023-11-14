import Tickets from "../../components/tickets/tickets";
import Banner from "../../components/banner/banner";

import "./styleTrain.scss";
import banner from "../../img/banner.jpg";
import Filters from "../../components/filters/filters";
import { useState, useEffect } from "react";
import Pagination from "../../components/pagination/pagination";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SideBar from "../../components/sideBar/sideBar";
import ChoiceOfPlaces from "../../components/choiceOfPlaces/choiceOfPlaces";
import { IId } from "../../store/city/cyty.slice";
import { Link } from "react-router-dom";
import { ITimeBack, ITimeThere } from "../../store/time/time.slice";
import {
  useLazySearchDirectionsQuery,
  useSearchDirectionsQuery,
} from "../../store/ticket/ticket.api";
import { Item, Root } from "../../models/ticketsModels";
import { useActions } from "../../hooks/useActions";
import { IDate } from "../../models/selectModel";

export default function TrainSelection() {
  const { addcurentPaginate, addChoiceOfPlace, addDirection } = useActions();
  const [selectPlaces, setSelectPlaces] = useState(false);
  const [offset, setOffset] = useState(0);
  const time = useTypedSelector((state) => state.time);
  const price = useTypedSelector((state) => state.price);
  const extras = useTypedSelector((state) => state.extras);
  const sort = useTypedSelector((state) => state.sort);
  const curentPaginate = useTypedSelector((state) => state.curentPaginate);
  const city = useTypedSelector((state) => state.city);

  const showBy = useTypedSelector((state) => state.showBy);
  const [fetchChoiceOfPlsce, { data: dataChoce }] =
    useLazySearchDirectionsQuery();

  useEffect(() => {
    addChoiceOfPlace(dataChoce);
  }, [dataChoce]);

  const cytiId1 = `from_city__id=${(city[2] as IId).id1} || ""`;
  const cytiId2 = `&to_city_id=${(city[2] as IId).id2 || ""}`;
  const dateStart = `&date_start=${(city[1] as IDate).date1}`;
  const dateEnd = `&date_end=${(city[1] as IDate).date2}`;
  const firstClass = extras.have_first_class
    ? `&have_first_class=${extras.have_first_class}`
    : "";
  const secondClass = extras.have_second_class
    ? `&have_second_class=${extras.have_second_class}`
    : "";
  const thirdClass = extras.have_third_class
    ? `&have_third_class=${extras.have_third_class}`
    : "";
  const fourthClass = extras.have_fourth_class
    ? `&have_fourth_class=${extras.have_fourth_class}`
    : "";
  const haveWifi = extras.have_wifi ? `&have_wifi=${extras.have_wifi}` : "";
  const haveExpress = extras.is_express
    ? `&have_express=${extras.is_express}`
    : "";
  const priceFrom = `&price_from=${price[0]}`;
  const priceTo = `&price_to=${price[1]}`;

  const startHourFrom = (time[0] as ITimeThere)?.startDepartureHourFrom
    ? `&start_departure_hour_from=${
        (time[0] as ITimeThere).startDepartureHourFrom
      }`
    : "";
  const startHourto = (time[0] as ITimeThere)?.startDepartureHourTo
    ? `&start_departure_hour_to=${(time[0] as ITimeThere).startDepartureHourTo}`
    : "";
  const startArrivalHourFrom = (time[0] as ITimeThere)?.startArrivalHourFrom
    ? `&start_arrival_hour_from=${(time[0] as ITimeThere).startArrivalHourFrom}`
    : "";
  const startArrivalHourto = (time[0] as ITimeThere)?.startArrivalHourTo
    ? `&start_arrival_hour_to=${(time[0] as ITimeThere).startArrivalHourTo}`
    : "";
  const endHourFrom = (time[1] as ITimeBack)?.endDepartureHourFrom
    ? `&end_departure_hour_from=${(time[1] as ITimeBack).endDepartureHourFrom}`
    : "";
  const endHourTo = (time[1] as ITimeBack)?.endDepartureHourTo
    ? `&end_departure_hour_to=${(time[1] as ITimeBack).endDepartureHourTo}`
    : "";
  const endArrivalHourFrom = (time[1] as ITimeBack)?.endArrivalHourFrom
    ? `&end_arrival_hour_from=${(time[1] as ITimeBack).endArrivalHourFrom}`
    : "";
  const endArrivalHourTo = (time[1] as ITimeBack)?.endArrivalHourTo
    ? `&end_arrival_hour_to=${(time[1] as ITimeBack).endArrivalHourTo}`
    : "";

  const { data } = useSearchDirectionsQuery(
    `?${cytiId1}${cytiId2}&offset=${offset}&limit=${showBy}&sort=${sort}${dateStart}${dateEnd}
		${firstClass}${secondClass}${thirdClass}${fourthClass}${haveWifi}${haveExpress}
		${priceFrom}${priceTo}${startHourFrom}${startHourto}${startArrivalHourFrom}${startArrivalHourFrom}
		${startArrivalHourto}${endHourFrom}${endHourTo}${endArrivalHourFrom}${endArrivalHourTo}`
  );

  const [further, setFurther] = useState(false);
  const [counties, setCountries] = useState([]);

  useEffect(() => {
    if (data) {
      setCountries(data.items);
    }
  }, [data]);

  useEffect(() => {
    const newCurent = curentPaginate * showBy;
    setOffset((prev) => prev - prev + newCurent);
  }, [curentPaginate]);

  function clickNext() {
    addcurentPaginate(curentPaginate + 1);
    setOffset((prev) => prev + showBy);
  }

  function clickPrev() {
    if (curentPaginate === 1 || offset === 0) {
      return;
    } else {
      setOffset((prev) => prev - showBy);
      addcurentPaginate(curentPaginate - 1);
    }
  }
  return (
    <>
      <Banner img={banner} />
      <section className="content">
        <div className="content__body">
          {!selectPlaces && <Filters />}
          {!further && <SideBar />}
          {!selectPlaces && (
            <section className="content__tickets">
              {data?.items?.map((ticket: Item) => (
                <Tickets
                  key={ticket.departure.train._id}
                  items={ticket}
                  onSelectPlaces={() => {
                    setSelectPlaces(true);
                    fetchChoiceOfPlsce(`${ticket.departure._id}/seats?`);
                    addDirection({
                      train: ticket.departure.train.name,
                      station: ticket.departure.from.railway_station_name,
                    });
                  }}
                  btn={"Выбрать места"}
                />
              ))}
              <Pagination
                onOffsetNext={clickNext}
                onOffsetPrev={clickPrev}
                TotalCount={data?.total_count}
                countriesPerPage={showBy}
              />
            </section>
          )}
          {selectPlaces && !further && (
            <section className="content__choice-of-places">
              <p className="choice-of-places__title">Выбор мест</p>
              <ChoiceOfPlaces
                onAnoterTrains={() => setSelectPlaces(false)}
                end=""
              />
              {/* <ChoiceOfPlaces
                onAnoterTrains={() => setSelectPlaces(false)}
                end="end"
              /> */}
              <Link
                to={"/passengers"}
                onClick={() => setFurther(true)}
                className="choice-of-places-btn"
              >
                ДАЛЕЕ
              </Link>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
