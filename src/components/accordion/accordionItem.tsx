import { useState } from "react";

import "./sryleAccordion.scss";
import ReactSlider from "react-slider";

interface AccordionItemProps {
  title: string;
  img: string;
}

export default function AccordionItem({ title, img }: AccordionItemProps) {
  //   const [discessum, setDiscessum] = useState<number[]>([0, 24]);
  //   const [arrival, setArrival] = useState<number[]>([0, 24]);
  const [minTime2, setMinTime2] = useState<number>(0);
  const [maxTime2, setMaxTime2] = useState<number>(1440);
  const [minTime, setMinTime] = useState<number>(0);
  const [maxTime, setMaxTime] = useState<number>(1440);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  const renderThumb = (props: any, state: any) => (
    <div {...props}>
      {state.valueNow !== undefined ? formatTime(state.valueNow) : ""}
    </div>
  );

  const renderTrack = (props: any, state: any) => (
    <div {...props}>
      {state.valueNow !== undefined ? formatTime(state.valueNow) : ""}
    </div>
  );

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <img className="accordion-img" src={img} alt="" />
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <div className={`icon ${isOpen ? "minus" : "plus"}`}></div>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-drop">
          <p className="accordion-content__title">Время отбытия</p>
          <div className="accordion-switch">
            <div className="accordion-switch__min">
              {minTime > 300 && "00:00"}
            </div>
            <div className="accordion-switch__max">
              {maxTime < 1100 && "24:00"}
            </div>
            <ReactSlider
              value={[minTime, maxTime]}
              min={0}
              max={1440}
              className="accordion__horizontal-slider"
              thumbClassName="accordion__example-thumb"
              trackClassName="accordion__example-track"
              onChange={(newValues, index) => {
                setMinTime(newValues[0]);
                setMaxTime(newValues[1]);
              }}
              renderThumb={renderThumb}
              renderTrack={renderTrack}
            />
          </div>
        </div>
        <div className="accordion-drop">
          <p className="accordion-content__title accordion-content__title-right">
            Время прибытия
          </p>
          <div className="accordion-switch">
            <div className="accordion-switch__min">
              {minTime2 > 300 && "00:00"}
            </div>
            <div className="accordion-switch__max">
              {maxTime2 < 1100 && "24:00"}
            </div>
            <ReactSlider
              value={[minTime2, maxTime2]}
              min={0}
              max={1440}
              className="accordion__horizontal-slider"
              thumbClassName="accordion__example-thumb"
              trackClassName="accordion__example-track"
              onChange={(newValues, index) => {
                setMinTime2(newValues[0]);
                setMaxTime2(newValues[1]);
              }}
              renderThumb={renderThumb}
              renderTrack={renderTrack}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
