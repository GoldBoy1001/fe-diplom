import { useEffect, useState } from "react";

import "./styleChoiceOfPlaces.scss";

import time from "../../img/svg/choice-time.svg";
import sedentary from "../../img/svg/sedentary.svg";
import reserved from "../../img/svg/reserved.svg";
import compartment from "../../img/svg/comportament.svg";
import sedentaryGold from "../../img/svg/sedentary-gold.svg";
import reservedGold from "../../img/svg/reserved-gold.svg";
import compartmentGold from "../../img/svg/comportament-gold.svg";
import luxury from "../../img/svg/luxury.svg";
import luxuryGold from "../../img/svg/luxury-gold.svg";
import trainBtn from "../../img/svg/bar-arrow.svg";
import train from "../../img/svg/choice-train.svg";
import arrowChoice from "../../img/svg/train-arrow.svg";
import AnotherTrains from "./choiceComponents/anotherTrains";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICity } from "../../models/selectModel";
import { IChoceOfPlace, ICoach } from "../../models/choiceModel";
import { useLazySearchDirectionsQuery } from "../../store/ticket/ticket.api";

interface ChoiceOfPlacesProps {
  end: string;
  onAnoterTrains: () => void;
}

type ButtonName = "button1" | "button2" | "button3" | "button4";
type ButtonNamePlace =
  | "item1"
  | "item2"
  | "item3"
  | "item4"
  | "item5"
  | "item6"
  | "item7"
  | "item8"
  | "item9"
  | "item10"
  | "item11"
  | "item12"
  | "item13"
  | "item14"
  | "item15"
  | "item16"
  | "item17"
  | "item18"
  | "item19"
  | "item20"
  | "item21"
  | "item22"
  | "item23"
  | "item24"
  | "item25"
  | "item26"
  | "item27"
  | "item28"
  | "item29"
  | "item30"
  | "item31"
  | "item32";

export default function ChoiceOfPlaces({
  end,
  onAnoterTrains,
}: ChoiceOfPlacesProps) {
  const [adult, setAdult] = useState("");
  const [childlike, setChildlike] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [activeButtons, setActiveButtons] = useState<ButtonName[]>([]);
  const [activeButtonsPlace, setActiveButtonsPlace] = useState<
    ButtonNamePlace[]
  >([]);
  const [fetchChoiceOfPlsce, { data }] = useLazySearchDirectionsQuery();
  const choceOfPlace = useTypedSelector((state) => state.choiceOfPlace);
  const direction = useTypedSelector((state) => state.direction);
  const city = useTypedSelector((state) => state.city);

  const trainNumbers = direction[0].train;
  const trainNumber = trainNumbers.replace(/\D/g, "");

  const [clickType, setClickType] = useState("");

  function onClickService(buttonName: ButtonName) {
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter((btn) => btn !== buttonName));
    } else {
      setActiveButtons([...activeButtons, buttonName]);
    }
  }
  function onClickPlace(buttonName: ButtonNamePlace) {
    if (activeButtonsPlace.includes(buttonName)) {
      setActiveButtonsPlace(
        activeButtonsPlace.filter((btn) => btn !== buttonName)
      );
    } else {
      setActiveButtonsPlace([...activeButtonsPlace, buttonName]);
    }
  }
  useEffect(() => {
    fetchChoiceOfPlsce(
      "64103a355c49ea004634c6ed/seats?have_third_class=true?have_second_class=true"
    );
  }, [data]);
  console.log(data);

  function onClickType(i: string) {
    setClickType((prevClickType) => (prevClickType === i ? "" : i));
  }

  const availablePassengers = 5 - parseInt(adult);
  const availableChild = 4 - parseInt(childlike);

  return (
    <div className="choice-of-places">
      <AnotherTrains onAnoterTrains={onAnoterTrains} end={end} />
      <div className="choice-of-places__train-number">
        <div className="train-number">
          <img
            className="train-number__img"
            src={train}
            alt="Иконка вагона"
          ></img>
          <div className="train-number__num">
            <div className="num-train">
              <p className="num-train__num">{trainNumber}</p>
              <span className="num-train__direction">
                {direction[0].station} →
              </span>
              <span className="num-train__from">
                {(city[0] as ICity).city1} →
              </span>
              <span className="num-train__where">
                {(city[0] as ICity).city2} →
              </span>
            </div>
          </div>
          <div className="train-number__time-from">
            <div className="time-from">
              <span className="time-from__time">00:10</span>
              <span className="time-from__city">
                {(city[0] as ICity).city1}
              </span>
              <span className="time-from__railway-station">Курский вокзал</span>
            </div>
          </div>
          <img
            className="train-number__arrow"
            src={arrowChoice}
            alt="Стрелка"
          />
          <div className="train-number__time-where">
            <div className="time-where">
              <span className="time-where__time">09:52</span>
              <span className="time-where__city">
                {(city[0] as ICity).city2}
              </span>
              <span className="time-where__railway-station">
                Ладожский вокзал
              </span>
            </div>
          </div>
          <div className="train-number__follow-up-time">
            <div className="follow-up-time">
              <img
                className="follow-up-time__img"
                src={time}
                alt="Иконка часов"
              />
              <div className="follow-up-time__time-type">
                <span>9 часов</span>42 минуты
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choice-of-places__number-of-tickets">
        <div className="number-of-tickets">
          <p className="number-of-tickets__title">Количество билетов</p>
          <div className="number-of-tickets__body">
            <label className="number-of-tickets__item adults" htmlFor="adult">
              <div className="item-number-tickets">
                <input
                  placeholder="Взрослых —"
                  id="adult"
                  value={adult}
                  className="item-number-tickets__adults"
                  type="number"
                  onChange={(e) => {
                    const newValue = Math.min(
                      Math.max(parseInt(e.target.value) || 0, 0),
                      5
                    );
                    setAdult(newValue.toString());
                  }}
                />
                <p className="item-number-tickets__text">
                  {availablePassengers > 0
                    ? `Можно добавить еще ${availablePassengers} пассажиров`
                    : ""}
                </p>
              </div>
            </label>
            <label className="number-of-tickets__item children" htmlFor="child">
              <div className="item-number-tickets">
                <input
                  placeholder="Детских —"
                  id="child"
                  value={childlike}
                  className="item-number-tickets__children"
                  type="number"
                  onChange={(e) => {
                    const newValue = Math.min(
                      Math.max(parseInt(e.target.value) || 0, 0),
                      4
                    );
                    setChildlike(newValue.toString());
                  }}
                />
                <p className="item-number-tickets__text ">
                  {availableChild > 0
                    ? `Можно добавить еще ${availableChild} детей до 10 лет.Свое место в вагоне, как
						  у взрослых, но дешевле в среднем на 50-65%`
                    : ""}
                </p>
              </div>
            </label>
            <p className="children__btn">
              <span>Детских «без места» — 0</span>
            </p>
          </div>
        </div>
      </div>
      <div className="choice-of-places__type-of-car">
        <p className="type-of-car__title">Тип вагона</p>
        <div className="type-of-car">
          <div
            onClick={() => onClickType("sedentary")}
            className={
              clickType === "sedentary"
                ? "type-of-car__item type-of-car__item-active"
                : "type-of-car__item"
            }
          >
            <img
              className="type-of-car__sedentary"
              src={clickType === "sedentary" ? sedentaryGold : sedentary}
              alt="Иконка"
            />
            <p className="type-of-car__text">Сидячий</p>
          </div>
          <div
            onClick={() => onClickType("reserved")}
            className={
              clickType === "reserved"
                ? "type-of-car__item type-of-car__item-active"
                : "type-of-car__item"
            }
          >
            <img
              className="type-of-car__reserved"
              src={clickType === "reserved" ? reservedGold : reserved}
              alt="Иконка"
            />
            <p className="type-of-car__text">Плацкарт</p>
          </div>
          <div
            onClick={() => onClickType("compartment")}
            className={
              clickType === "compartment"
                ? "type-of-car__item type-of-car__item-active"
                : "type-of-car__item"
            }
          >
            <img
              className="type-of-car__compartment"
              src={clickType === "compartment" ? compartmentGold : compartment}
              alt="Иконка"
            />
            <p className="type-of-car__text">Купе</p>
          </div>
          <div
            onClick={() => onClickType("luxury")}
            className={
              clickType === "luxury"
                ? "type-of-car__item type-of-car__item-active"
                : "type-of-car__item"
            }
          >
            <img
              className="type-of-car__luxury"
              src={clickType === "luxury" ? luxuryGold : luxury}
              alt="Иконка"
            />
            <p className="type-of-car__text">Люкс</p>
          </div>
        </div>
      </div>
      {clickType && (
        <div className="choice-of-places__choice-of-place">
          <div className="choice-of-place">
            <div className="choice-of-place__wagons">
              <div className="wagons">
                <p className="wagons__wagon">
                  Вагоны <span>07</span> <span>09</span>
                </p>
                <p className="wagons__numbering">
                  Нумерация вагонов начинается с головы поезда
                </p>
              </div>
            </div>
            <div className="choice-of-place__details">
              <div className="details">
                <div className="details__van">
                  <p className="details__van-number">07</p>
                  <p className="details__van-text">вагон</p>
                </div>
                <div className="details__places">
                  <p className="details__places-place">
                    Места <span>{11}</span>
                  </p>
                  <p className="details__places-upper">Верхние {3}</p>
                  <p className="details__places-lower">Нижние {8}</p>
                </div>
                <div className="details__price">
                  <p className="details__price-title">Стоимость</p>
                  <p className="details__price-upper">{"2 920"}</p>
                  <p className="details__price-lower">{"3 530"}</p>
                </div>
                <div className="details__service">
                  <p className="details__service-title">
                    Обслуживание <span>фпк</span>
                  </p>
                  <span
                    onClick={() => onClickService("button1")}
                    className={
                      activeButtons.includes("button1")
                        ? "details__service-conditioner details__service-conditioner-active"
                        : "details__service-conditioner"
                    }
                  ></span>
                  <span
                    onClick={() => onClickService("button2")}
                    className={
                      activeButtons.includes("button2")
                        ? "details__service-wifi details__service-wifi-active"
                        : "details__service-wifi"
                    }
                  ></span>
                  <span
                    onClick={() => onClickService("button3")}
                    className={
                      activeButtons.includes("button3")
                        ? "details__service-underwear details__service-underwear-active"
                        : "details__service-underwear"
                    }
                  ></span>
                  <span
                    onClick={() => onClickService("button4")}
                    className={
                      activeButtons.includes("button4")
                        ? "details__service-coffee details__service-coffee-active"
                        : "details__service-coffee"
                    }
                  ></span>
                </div>
              </div>
            </div>
            <div className="choice-of-place__place">
              <div className="place">
                <div className="place__left"></div>
                <div className="place__right"></div>
                <ul className="place__list">
                  <li
                    className={
                      activeButtonsPlace.includes("item1")
                        ? "place__item place__item1 place__item-active"
                        : "place__item place__item1"
                    }
                    onClick={() => onClickPlace("item1")}
                  >
                    <span>1</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item2")
                        ? "place__item place__item2 place__item-active"
                        : "place__item place__item2"
                    }
                    onClick={() => onClickPlace("item2")}
                  >
                    <span>2</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item3")
                        ? "place__item place__item3 place__item-active"
                        : "place__item place__item3"
                    }
                    onClick={() => onClickPlace("item3")}
                  >
                    <span>3</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item4")
                        ? "place__item place__item4 place__item-active"
                        : "place__item place__item4"
                    }
                    onClick={() => onClickPlace("item4")}
                  >
                    <span>4</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item5")
                        ? "place__item place__item5 place__item-active"
                        : "place__item place__item5"
                    }
                    onClick={() => onClickPlace("item5")}
                  >
                    <span>5</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item6")
                        ? "place__item place__item6 place__item-active"
                        : "place__item place__item6"
                    }
                    onClick={() => onClickPlace("item6")}
                  >
                    <span>6</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item7")
                        ? "place__item place__item7 place__item-active"
                        : "place__item place__item7"
                    }
                    onClick={() => onClickPlace("item7")}
                  >
                    <span>7</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item8")
                        ? "place__item place__item8 place__item-active"
                        : "place__item place__item8"
                    }
                    onClick={() => onClickPlace("item8")}
                  >
                    <span>8</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item9")
                        ? "place__item place__item9 place__item-active"
                        : "place__item place__item9"
                    }
                    onClick={() => onClickPlace("item9")}
                  >
                    <span>9</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item10")
                        ? "place__item place__item10 place__item-active"
                        : "place__item place__item10"
                    }
                    onClick={() => onClickPlace("item10")}
                  >
                    <span>10</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item11")
                        ? "place__item place__item11 place__item-active"
                        : "place__item place__item11"
                    }
                    onClick={() => onClickPlace("item11")}
                  >
                    <span>11</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item12")
                        ? "place__item place__item12 place__item-active"
                        : "place__item place__item12"
                    }
                    onClick={() => onClickPlace("item12")}
                  >
                    <span>12</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item13")
                        ? "place__item place__item13 place__item-active"
                        : "place__item place__item13"
                    }
                    onClick={() => onClickPlace("item13")}
                  >
                    <span>13</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item14")
                        ? "place__item place__item14 place__item-active"
                        : "place__item place__item14"
                    }
                    onClick={() => onClickPlace("item14")}
                  >
                    <span>14</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item15")
                        ? "place__item place__item15 place__item-active"
                        : "place__item place__item15"
                    }
                    onClick={() => onClickPlace("item15")}
                  >
                    <span>15</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item16")
                        ? "place__item place__item16 place__item-active"
                        : "place__item place__item16"
                    }
                    onClick={() => onClickPlace("item16")}
                  >
                    <span>16</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item17")
                        ? "place__item place__item17 place__item-active"
                        : "place__item place__item17"
                    }
                    onClick={() => onClickPlace("item17")}
                  >
                    <span>17</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item18")
                        ? "place__item place__item18 place__item-active"
                        : "place__item place__item18"
                    }
                    onClick={() => onClickPlace("item18")}
                  >
                    <span>18</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item19")
                        ? "place__item place__item19 place__item-active"
                        : "place__item place__item19"
                    }
                    onClick={() => onClickPlace("item19")}
                  >
                    <span>19</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item20")
                        ? "place__item place__item20 place__item-active"
                        : "place__item place__item20"
                    }
                    onClick={() => onClickPlace("item20")}
                  >
                    <span>20</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item21")
                        ? "place__item place__item21 place__item-active"
                        : "place__item place__item21"
                    }
                    onClick={() => onClickPlace("item21")}
                  >
                    <span>21</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item22")
                        ? "place__item place__item22 place__item-active"
                        : "place__item place__item22"
                    }
                    onClick={() => onClickPlace("item22")}
                  >
                    <span>22</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item23")
                        ? "place__item place__item23 place__item-active"
                        : "place__item place__item23"
                    }
                    onClick={() => onClickPlace("item23")}
                  >
                    <span>23</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item24")
                        ? "place__item place__item24 place__item-active"
                        : "place__item place__item24"
                    }
                    onClick={() => onClickPlace("item24")}
                  >
                    <span>24</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item25")
                        ? "place__item place__item25 place__item-active"
                        : "place__item place__item25"
                    }
                    onClick={() => onClickPlace("item25")}
                  >
                    <span>25</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item26")
                        ? "place__item place__item26 place__item-active"
                        : "place__item place__item26"
                    }
                    onClick={() => onClickPlace("item26")}
                  >
                    <span>26</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item27")
                        ? "place__item place__item27 place__item-active"
                        : "place__item place__item27"
                    }
                    onClick={() => onClickPlace("item27")}
                  >
                    <span>27</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item28")
                        ? "place__item place__item28 place__item-active"
                        : "place__item place__item28"
                    }
                    onClick={() => onClickPlace("item28")}
                  >
                    <span>28</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item29")
                        ? "place__item place__item29 place__item-active"
                        : "place__item place__item29"
                    }
                    onClick={() => onClickPlace("item29")}
                  >
                    <span>29</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item30")
                        ? "place__item place__item30 place__item-active"
                        : "place__item place__item30"
                    }
                    onClick={() => onClickPlace("item30")}
                  >
                    <span>30</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item31")
                        ? "place__item place__item31 place__item-active"
                        : "place__item place__item31"
                    }
                    onClick={() => onClickPlace("item31")}
                  >
                    <span>31</span>
                  </li>
                  <li
                    className={
                      activeButtonsPlace.includes("item32")
                        ? "place__item place__item32 place__item-active"
                        : "place__item place__item32"
                    }
                    onClick={() => onClickPlace("item32")}
                  >
                    <span>32</span>
                  </li>
                </ul>
                <div className="place__wall">
                  <span className="place__wall-item place__wall-item1">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item">
                    <span></span>
                  </span>
                  <span className="place__wall-item place__wall-item8">
                    <span></span>
                  </span>
                </div>
                <div className="place__tail"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
