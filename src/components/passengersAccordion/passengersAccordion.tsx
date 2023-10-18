import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { IOptions } from "../../models/selectModel";

import "./passengersAccordion.scss";

const options: IOptions[] = [
  { value: "adult", label: "Взрослый" },
  { value: "childlike", label: "Детский" },
];

export default function PassengersAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [valuepas, setValuePas] = useState("adult");

  const getValue = () => {
    return valuepas ? options.find((c) => c.value === valuepas) : "";
  };

  const onChange = (newValue: any) => {
    setValuePas(newValue.value);
    const index = options.findIndex(
      (option) => option.value === newValue.value
    );
    if (index > -1) {
      // Удаляет элемент из текущей позиции
      const [removedOption] = options.splice(index, 1);
      // Перемещает удаленный элемент на первую позицию
      options.unshift(removedOption);
    }
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`passengers__accordion-item ${
        isOpen ? "passengers__open" : ""
      }`}
    >
      <div className="passengers__accordion-header" onClick={toggleAccordion}>
        {/* {title} */}
        <div
          className={`passengers__icon ${
            isOpen ? "passengers__minus" : "passengers__plus"
          }`}
        ></div>
        Пассажир 1
      </div>
      <div
        className={`passengers__accordion-content ${
          isOpen ? "passengers__open" : ""
        }`}
      >
        <form className="passenger" action="#">
          <div className="passenger__type">
            <Select
              classNamePrefix={"select-passenger"}
              isSearchable={false}
              onChange={onChange}
              value={getValue()}
              options={options}
              components={makeAnimated()}
            />
          </div>
          <div className="passenger__data">
            <div className="data__surname">
              <label className="data__label" htmlFor="surname">
                Фамилия{" "}
              </label>
              <input id="surname" type="text" />
            </div>
            <div className="data__name">
              <label className="data__label" htmlFor="name">
                Имя
              </label>
              <input id="name" type="text" />
            </div>
            <div className="data__patronymic">
              <label className="data__label" htmlFor="patronymic">
                Фамилия
              </label>
              <input id="patronymic" type="text" />
            </div>
            <div className="data__gender">
              <div className="data__label">Пол</div>
              <span className="data__gender-man">м</span>
              <span className="data__gender-woman">ж</span>
            </div>
            <div className="data__year-of-birth">
              <label className="data__label" htmlFor="ear-of-birth"></label>
              <input
                className="data__year-of-birth-input"
                type="date"
                id="ear-of-birth"
              />
            </div>
          </div>
          <div className="passenger__document"></div>
        </form>
        <div className="passenger__btn">Следующий пассажир</div>
      </div>
    </div>
  );
}
