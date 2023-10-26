import "./styleTickets.scss";

import train from "../../img/train.png";
import arrow from "../../img/svg/train-arrow.svg";
import arrowFrom from "../../img/svg/train-arrowFrom.svg";
import wifi from "../../img/svg/train-wifi.svg";
import { useLocation } from "react-router-dom";

interface TicketsProps {
  length: number;
  loading: boolean;
  btn: string;
  onSelectPlaces: () => void;
}

export default function Tickets({
  length,
  loading,
  onSelectPlaces,
  btn,
}: TicketsProps) {
  const { pathname } = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {Array.from({ length: length }, (_, index) => (
        <div className="tickets">
          <div className="tickets__direction">
            <div className="direction-tickets__image">
              <img
                className="direction-tickets__img"
                src={train}
                alt="Иконка поезда"
              />
            </div>
            <span className="direction-tickets__train-number">{"116С"}</span>
            <div className="direction-tickets__cities">
              <span className="direction-tickets__city city-nn">
                {"Нижний Новгород →"}
              </span>
              <span className="direction-tickets__city">{"Москва →"}</span>
              <span className="direction-tickets__city">
                {"Санкт-Петербург «Волга»"}
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
                <span className="follow-up-time__time">{"8 : 32"}</span>
                <img
                  className="follow-up-time__arrow"
                  src={arrow}
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
            </div>
            <div className="time-tickets__row">
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
            </div>
          </div>
          <div className="tickets__cost">
            <div className="cost-tickets">
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">{"Плацкарт"}</span>
                <span className="cost-tickets__quantity">{"52"}</span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>
                  {"2 530"}
                </span>
              </div>
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">{"Плацкарт"}</span>
                <span className="cost-tickets__quantity">"52"</span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>2 530
                </span>
              </div>
              <div className="cost-tickets__row">
                <span className="cost-tickets__view">Плацкарт</span>
                <span className="cost-tickets__quantity">52</span>
                <span className="cost-tickets__price">
                  <span className="cost-tickets__min">от</span>2 530
                </span>
              </div>
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
      ))}
    </>
  );
}
