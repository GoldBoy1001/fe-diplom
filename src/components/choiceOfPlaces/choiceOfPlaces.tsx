import { useState } from "react";

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

interface ChoiceOfPlacesProps {
  end: string;
  onAnoterTrains: () => void;
}

type ButtonName = "button1" | "button2" | "button3" | "button4";

export default function ChoiceOfPlaces({
  end,
  onAnoterTrains,
}: ChoiceOfPlacesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButtons, setActiveButtons] = useState<ButtonName[]>([]);

  const [clickType, setClickType] = useState("");

  function onClickService(buttonName: ButtonName) {
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter((btn) => btn !== buttonName));
    } else {
      setActiveButtons([...activeButtons, buttonName]);
    }
  }

  function onClickType(i: string) {
    setClickType((prevClickType) => (prevClickType === i ? "" : i));
  }

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
              <p className="num-train__num">116С</p>
              <span className="num-train__direction">Адлер →</span>
              <span className="num-train__from">Москва →</span>
              <span className="num-train__where">Санкт-Петербург →</span>
            </div>
          </div>
          <div className="train-number__time-from">
            <div className="time-from">
              <span className="time-from__time">00:10</span>
              <span className="time-from__city">Москва</span>
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
              <span className="time-where__city">Санкт-Петербург</span>
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
              <div className="follow-up-time__time">
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
                  id="adult"
                  value={"Взрослых — 2"}
                  className="item-number-tickets__adults"
                  type="text"
                />
                <p className="item-number-tickets__text">
                  Можно добавить еще 3 пассажиров
                </p>
              </div>
            </label>
            <label className="number-of-tickets__item children" htmlFor="child">
              <div className="item-number-tickets">
                <input
                  id="child"
                  value={"Детских - 1"}
                  className="item-number-tickets__children"
                  type="text"
                />
                <p className="item-number-tickets__text ">
                  Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как
                  у взрослых, но дешевле в среднем на 50-65%
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
                <div className="place__head"></div>
                <ul className="place__list">
                  <li className="place__item place__item1">1</li>
                  <li className="place__item place__item2">2</li>
                  <li className="place__item place__item3">3</li>
                  <li className="place__item place__item4">4</li>
                  <li className="place__item place__item5">5</li>
                  <li className="place__item place__item6">6</li>
                  <li className="place__item place__item7">7</li>
                  <li className="place__item place__item8">8</li>
                  <li className="place__item place__item9">9</li>
                  <li className="place__item place__item10">10</li>
                  <li className="place__item place__item11">11</li>
                  <li className="place__item place__item12">12</li>
                  <li className="place__item place__item13">13</li>
                  <li className="place__item place__item14">14</li>
                  <li className="place__item place__item15">15</li>
                  <li className="place__item place__item16">16</li>
                  <li className="place__item place__item17">17</li>
                  <li className="place__item place__item18">18</li>
                  <li className="place__item place__item19">19</li>
                  <li className="place__item place__item20">20</li>
                  <li className="place__item place__item21">21</li>
                  <li className="place__item place__item22">22</li>
                  <li className="place__item place__item23">23</li>
                  <li className="place__item place__item24">24</li>
                  <li className="place__item place__item25">25</li>
                  <li className="place__item place__item26">26</li>
                  <li className="place__item place__item27">27</li>
                  <li className="place__item place__item28">28</li>
                  <li className="place__item place__item29">29</li>
                  <li className="place__item place__item30">30</li>
                  <li className="place__item place__item31">31</li>
                  <li className="place__item place__item32">32</li>
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
