import "./styleTickets.scss";

import train from "../../img/train.png";
import arrow from "../../img/svg/train-arrow.svg";
import arrowFrom from "../../img/svg/train-arrowFrom.svg";
import wifi from "../../img/svg/train-wifi.svg";
import { useLocation } from "react-router-dom";
import { useSearchDirectionsQuery } from "../../store/ticket/ticket.api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICity } from "../../models/selectModel";
import { IId } from "../../store/city/cyty.slice";
import { Item } from "../../models/ticketsModels";

interface TicketsProps {
  btn: string;
  onSelectPlaces: () => void;
  items: Item;
}

export default function Tickets({ onSelectPlaces, btn, items }: TicketsProps) {
  const { pathname } = useLocation();
  const city = useTypedSelector((state) => state.city);

  const inputString = items.departure.train.name;
  const digitsOnly = inputString.replace(/\D/g, "");

  const totalSeconds = items.departure.duration;

  // Вычисляем часы
  const hours = Math.floor(totalSeconds / 3600);

  // Вычисляем остаток секунд
  const remainingSeconds = totalSeconds % 3600;

  // Вычисляем минуты
  const minutes = Math.floor(remainingSeconds / 60);

  return (
    <>
      <div className="tickets">
        <div className="tickets__direction">
          <div className="direction-tickets__image">
            <img
              className="direction-tickets__img"
              src={train}
              alt="Иконка поезда"
            />
          </div>
          <span className="direction-tickets__train-number">{digitsOnly}</span>
          <div className="direction-tickets__cities">
            <span className="direction-tickets__city city-nn">
              {`${items.departure.from.railway_station_name} →`}
            </span>
            <span className="direction-tickets__city">{`${
              (city[0] as ICity).city1
            } →`}</span>
            <span className="direction-tickets__city">
              {(city[0] as ICity).city2}
            </span>
          </div>
        </div>
        <div className="tickets__time">
          <div className="time-tickets__row">
            <div className="time-tickets__there">
              <span className="time-tickets__time">{"00:41"}</span>
              <span className="time-tickets__city">Москва</span>
              <span className="time-tickets__railway-station">
                {" Ленинградский вокзал"}
              </span>
            </div>
            <div className="tickets__follow-up-time">
              <span className="follow-up-time__time">
                {`${hours} : ${minutes}`}
              </span>
              <img
                className="follow-up-time__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </div>

            <div className="time-tickets__from">
              <span className="time-tickets__time">{"09:13"}</span>
              <span className="time-tickets__city">
                {items.departure.to.city.name}
              </span>
              <span className="time-tickets__railway-station">
                {items.departure.to.railway_station_name}
              </span>
            </div>
          </div>
          {/* <div className="time-tickets__row">
            <div className="time-tickets__there">
              <span className="time-tickets__time">{"00:41"}</span>
              <span className="time-tickets__city">{"Москва"}</span>
              <span className="time-tickets__railway-station">
                {"Ленинградский вокзал"}
              </span>
            </div>
            <div className="tickets__follow-up-time">
              <span className="follow-up-time__time">{"8 : 32"}</span>
              <img
                className="follow-up-time__arrow"
                src={arrowFrom}
                alt="Стрелка"
              />
            </div>

            <div className="time-tickets__from">
              <span className="time-tickets__time">{"09:13"}</span>
              <span className="time-tickets__city">{"Санкт-Петербург"}</span>
              <span className="time-tickets__railway-station">
                {"Ладожский вокзал"}
              </span>
            </div>
          </div> */}
        </div>
        <div className="tickets__cost">
          <div className="cost-tickets">
            {items.departure.have_fourth_class && (
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">{"Сидячий"}</span>
                <span className="cost-tickets__quantity">
                  {items.departure.available_seats_info.fourth}
                  <span className="cost-tickets__quantity-romb"></span>
                  <ul className="cost-tickets__quantity-drop">
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Верхние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.fourth?.top_price}
                    </li>
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Нижние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.fourth?.bottom_price}
                    </li>
                  </ul>
                </span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>
                  {items.departure?.price_info.fourth?.bottom_price}
                </span>
              </div>
            )}
            {items.departure.have_third_class && (
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">{"Плацкарт"}</span>
                <span className="cost-tickets__quantity">
                  {items.departure.available_seats_info.third}
                  <span className="cost-tickets__quantity-romb"></span>
                  <ul className="cost-tickets__quantity-drop">
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Верхние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.third?.top_price}
                    </li>
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Нижние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.third?.bottom_price}
                    </li>
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Сидячие</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.third?.side_price}
                    </li>
                  </ul>
                </span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>
                  {items.departure.price_info.third?.side_price}
                </span>
              </div>
            )}
            {items.departure.have_second_class && (
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">{"Купе"}</span>
                <span className="cost-tickets__quantity">
                  {items.departure.available_seats_info.second}
                  <span className="cost-tickets__quantity-romb"></span>
                  <ul className="cost-tickets__quantity-drop">
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Верхние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.second.top_price}
                    </li>
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Нижние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.second.bottom_price}
                    </li>
                  </ul>
                </span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>
                  {items.departure.price_info.second?.top_price}
                </span>
              </div>
            )}
            {items.departure.have_first_class && (
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">Люкс</span>
                <span className="cost-tickets__quantity">
                  {items.departure.available_seats_info.first}
                  <span className="cost-tickets__quantity-romb"></span>
                  <ul className="cost-tickets__quantity-drop">
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Верхние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.first?.top_price}
                    </li>
                    <li className="cost-tickets__quantity-drop-item">
                      <span>Нижние</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.first?.bottom_price}
                    </li>
                    {/* <li className="cost-tickets__quantity-drop-item">
                      <span>Сидячие</span>
                      <span className="places-quantity-drop">10</span>
                      {items.departure.price_info.third?.side_price}
                    </li> */}
                  </ul>
                </span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>
                  {items.departure.price_info.first?.price}
                </span>
              </div>
            )}
            <div className="cost-tickets__extras">
              <img className="extras__wifi" src={wifi} alt="Иконка wifi" />
            </div>
            <p
              onClick={onSelectPlaces}
              className={
                pathname === "/check"
                  ? "cost-tickets__btn cost-tickets__btn-check"
                  : "cost-tickets__btn"
              }
            >
              {btn}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
