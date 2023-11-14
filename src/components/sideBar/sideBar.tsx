import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { IDate } from "../../models/selectModel";

import "./styleSideBar.scss";

import InputDate from "../../components/banner/bannerComponents/bannerForm/inputDate/inputDate";
import Switch from "../../components/switch/switch";
import AccordionItem from "../../components/accordion/accordionItem";
import arrow from "../../img/svg/bar-arrow.svg";
import arrow2 from "../../img/svg/bar-arrow2.svg";
import RecentTickets from "../recentTickets/recentTickets";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLastTicketsQuery } from "../../store/ticket/ticket.api";
import { ILastTickets } from "../../models/lastTicketsModels";
import { useActions } from "../../hooks/useActions";

export default function SideBar() {
  //   const [switch1Checked, setSwitch1Checked] = useState(false);
  //   const [switch2Checked, setSwitch2Checked] = useState(false);
  //   const [switch3Checked, setSwitch3Checked] = useState(false);
  //   const [switch4Checked, setSwitch4Checked] = useState(false);
  //   const [switch5Checked, setSwitch5Checked] = useState(false);
  //   const [switch6Checked, setSwitch6Checked] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [values, setValue] = useState<number[]>([0, 7000]);
  const { addPrice } = useActions();

  useEffect(() => {
    const timer = setTimeout(() => {
      addPrice(values);
    }, 300);
    return () => clearTimeout(timer);
  }, [values]);

  const {
    addFirstClass,
    addFourthClass,
    addExpress,
    addSecondClass,
    addThirdClass,
    addWifi,
  } = useActions();
  const city = useTypedSelector((state) => state.city);
  const { data } = useLastTicketsQuery("");

  const handleSwitchChange = (id: string, checked: boolean) => {
    if (id === "switch1") {
      // setSwitch1Checked(checked);
      addSecondClass(checked);
    } else if (id === "switch2") {
      // setSwitch2Checked(checked);
      addThirdClass(checked);
    } else if (id === "switch3") {
      // setSwitch3Checked(checked);
      addFourthClass(checked);
    } else if (id === "switch4") {
      // setSwitch4Checked(checked);
      addFirstClass(checked);
    } else if (id === "switch5") {
      // setSwitch5Checked(checked);
      addWifi(checked);
    } else if (id === "switch6") {
      // setSwitch6Checked(checked);
      addExpress(checked);
    }
  };

  return (
    <aside className="content__aside">
      <div className="content__side-bar">
        <div className="side-bar">
          <div className="side-bar__date">
            <InputDate
              title="Дата поездки"
              value={
                !selectedDate1
                  ? (city[1] as IDate).date1 || selectedDate1
                  : selectedDate1
              }
              onChange={(newValue) => setSelectedDate1(newValue)}
            />
            <InputDate
              title="Дата возвращения"
              value={
                !selectedDate2
                  ? (city[1] as IDate).date2 || selectedDate2
                  : selectedDate2
              }
              onChange={(newValue) => setSelectedDate2(newValue)}
            />
          </div>
          <span className="side-bar__border"></span>
          <div className="side-bar__extras">
            <div className="extras-bar">
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-compartment">
                  Купе
                </p>
                <Switch id="switch1" onSwitchChange={handleSwitchChange} />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-reserved">
                  Плацкарт
                </p>
                <Switch id="switch2" onSwitchChange={handleSwitchChange} />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-sedentary">
                  Сидячий
                </p>
                <Switch id="switch3" onSwitchChange={handleSwitchChange} />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-luxury">Люкс</p>
                <Switch id="switch4" onSwitchChange={handleSwitchChange} />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-wifi">Wi-Fi </p>
                <Switch id="switch5" onSwitchChange={handleSwitchChange} />
              </div>
              <div className="extras-bar__row">
                <p className="extras-bar__text extras-bar__text-express">
                  Экспресс
                </p>
                <Switch id="switch6" onSwitchChange={handleSwitchChange} />
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
        {data?.map((ticket: ILastTickets) => (
          <RecentTickets items={ticket} key={ticket.departure._id} />
        ))}
      </div>
    </aside>
  );
}
