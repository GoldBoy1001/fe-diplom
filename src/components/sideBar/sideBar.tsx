import { useState } from "react";
import ReactSlider from "react-slider";

import "./styleSideBar.scss";

import InputDate from "../../components/banner/bannerComponents/bannerForm/inputDate/inputDate";
import Switch from "../../components/switch/switch";
import AccordionItem from "../../components/accordion/accordionItem";
import arrow from "../../img/svg/bar-arrow.svg";
import arrow2 from "../../img/svg/bar-arrow2.svg";
import RecentTickets from "../recentTickets/recentTickets";

export default function SideBar() {
  const [values, setValue] = useState<number[]>([0, 7000]);
  return (
    <aside className="content__aside">
      <div className="content__side-bar">
        <div className="side-bar">
          <div className="side-bar__date">
            <InputDate title="Дата поездки" />
            <InputDate title="Дата возвращения" />
          </div>
          <span className="side-bar__border"></span>
          <div className="side-bar__extras">
            <div className="extras-bar">
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-compartment">
                  Купе
                </p>
                <Switch />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-reserved">
                  Плацкарт
                </p>
                <Switch />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-sedentary">
                  Сидячий
                </p>
                <Switch />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-luxury">Люкс</p>
                <Switch />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-wifi">Wi-Fi </p>
                <Switch />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-express">
                  Экспресс
                </p>
                <Switch />
              </div>
            </div>
          </div>
          <span className="side-bar__border"></span>
          <div className="side-bar__price">
            <p className="extras-bar__title">Стоимость </p>
            <span className="extras-bar__from">от</span>
            <span className="extras-bar__before">до</span>
            <span className="extras-bar__min">{values[0] > 3000 && 1920}</span>
            <span className="extras-bar__max">{values[1] < 6000 && 7000}</span>
            <ReactSlider
              defaultValue={[1920, 7000]}
              min={1920}
              max={7000}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => (
                <div {...props}> {state.valueNow} </div>
              )}
              onChange={(value, index) => setValue(value)}
            />
          </div>
          <span className="side-bar__border"></span>
          <div className="side-bar__time ">
            <div className="accordion">
              <AccordionItem title="Туда" img={arrow} />
            </div>
            <span className="side-bar__border"></span>
            <div className="accordion">
              <AccordionItem title="Обратно" img={arrow2} />
            </div>
          </div>
        </div>
      </div>
      <div className="recent-tickets">
        <p className="recent-tickets__title">последние билеты</p>
        <RecentTickets />
        <RecentTickets />
        <RecentTickets />
      </div>
    </aside>
  );
}
