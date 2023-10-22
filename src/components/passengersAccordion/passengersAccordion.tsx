import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { IOptions } from "../../models/selectModel";

import "./passengersAccordion.scss";

const options: IOptions[] = [
  { value: "adult", label: "Взрослый" },
  { value: "childlike", label: "Детский" },
];
const optionsDocumen: IOptions[] = [
  { value: "pasp", label: "Паспорт" },
  { value: "svid", label: "Свидетельство о рождении" },
];
interface PassengersAccordionProps {
  title: string;
}

export default function PassengersAccordion({
  title,
}: PassengersAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [valuepas, setValuePas] = useState("adult");
  const [valueDoc, setValueDoc] = useState("pasp");
  const [gender, setGender] = useState("");

  //   const getValue = () => {
  //     return valuepas ? options.find((c) => c.value === valuepas) : "";
  //   };

  function onClickGender(i: string) {
    setGender(i);
  }

  const getValueDoc = () => {
    return valueDoc ? optionsDocumen.find((c) => c.value === valueDoc) : "";
  };

  const getValue = (value: string, options: IOptions[]) => {
    return value ? options.find((c) => c.value === value) : "";
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
  const onChangeDoc = (newValue: any) => {
    setValueDoc(newValue.value);
    const index = optionsDocumen.findIndex(
      (option) => option.value === newValue.value
    );
    if (index > -1) {
      // Удаляет элемент из текущей позиции
      const [removedOption] = optionsDocumen.splice(index, 1);
      // Перемещает удаленный элемент на первую позицию
      optionsDocumen.unshift(removedOption);
    }
  };

  // const onChangeGeneric = (newValue: any, setValue: (value: string) => void, options: IOptions[]) => {
  // 	setValue(newValue.value);
  // 	const index = options.findIndex(
  // 	  (option) => option.value === newValue.value
  // 	);
  // 	if (index > -1) {
  // 	  // Удаляет элемент из текущей позиции
  // 	  const [removedOption] = options.splice(index, 1);
  // 	  // Перемещает удаленный элемент на первую позицию
  // 	  options.unshift(removedOption);
  // 	}
  //  };

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
        <div
          className={`passengers__icon ${
            isOpen ? "passengers__minus" : "passengers__plus"
          }`}
        ></div>
        {title}
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
              value={getValue(valuepas, options)}
              options={options}
              components={makeAnimated()}
            />
          </div>
          <div className="passenger__data">
            <div className="data__surname">
              <label className="data__label" htmlFor="surname">
                Фамилия
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
                Отчество
              </label>
              <input id="patronymic" type="text" />
            </div>
            <div className="data__gender">
              <div className="data__label">Пол</div>
              <span
                onClick={() => onClickGender("man")}
                className={
                  gender === "man"
                    ? "data__gender-man data__gender-active"
                    : "data__gender-man"
                }
              >
                м
              </span>
              <span
                onClick={() => onClickGender("woman")}
                className={
                  gender === "woman"
                    ? "data__gender-woman data__gender-active"
                    : "data__gender-woman"
                }
              >
                ж
              </span>
            </div>
            <div className="data__year-of-birth">
              <label className="data__label" htmlFor="ear-of-birth">
                Дата рождения
              </label>
              <input
                className="data__year-of-birth-input"
                type="date"
                id="ear-of-birth"
              />
            </div>
            <div className="data__checkbox">
              <input type="checkbox" className="data__checkbox-check" />
              <span className="data__checkbox-text">
                ограниченная подвижность
              </span>
            </div>
          </div>
          <div className="passenger__document">
            <div
              className={
                valueDoc === "svid"
                  ? "passenger__document-select passenger__document-select-certificate"
                  : "passenger__document-select"
              }
            >
              <p className="passenger__document-label passenger__document-label1">
                Тип документа
              </p>
              <Select
                classNamePrefix={"select-document"}
                isSearchable={false}
                onChange={onChangeDoc}
                value={getValueDoc()}
                options={optionsDocumen}
                components={makeAnimated()}
              />
            </div>
            {valueDoc === "pasp" && (
              <div className="passenger__document-series">
                <label
                  className="passenger__document-label passenger__document-label2"
                  htmlFor="series"
                >
                  Серия
                </label>
                <input
                  type="text"
                  id="series"
                  className="passenger__document-input"
                />
              </div>
            )}
            <div className="passenger__document-numbers">
              <label
                className="passenger__document-label passenger__document-label3"
                htmlFor="number-document"
              >
                Номер
              </label>
              <input
                type="text"
                id="number-document"
                className="passenger__document-number"
              />
            </div>
          </div>
        </form>
        <div className="passenger__button">
          <span className="passenger__btn">Следующий пассажир</span>
        </div>
      </div>
    </div>
  );
}
