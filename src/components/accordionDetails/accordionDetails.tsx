import { useState } from "react";

import "./accordionDetailsStyle.scss";
import DepartureDetails from "./accordionDetailsComponents/departureDetails";

interface AccordionItemProps {
  title: string;
  img: string;
  num: string;
  numbers: string;
  titleDrop: string;
  subtitle?: string;
  sum?: string;
  visible: boolean;
}

export default function AccordionDetails({
  title,
  img,
  titleDrop,
  num,
  numbers,
  subtitle,
  sum,
  visible,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      {<img className="accordion-img" src={img} alt="" />}
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <div className={`icon ${isOpen ? "minus" : "plus"}`}></div>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="bar-details__drop">
          <div className="bar-details__drop-numbers">{numbers}</div>
          <div className="bar-details__drop-num">{num}</div>
          <div className="bar-details__drop-title">{titleDrop}</div>
          <div className="bar-details__drop-subtitle">
            {subtitle}
            <span>{sum}</span>
          </div>
        </div>
        {visible && <DepartureDetails />}
      </div>
    </div>
  );
}
