import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { IOptions } from "../../models/selectModel";
import { IDetail } from "../../store/order/order.slice";

import "./passengersAccordion.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
  number?: number;
  onChangeForm?: (data: any) => void;
}

export default function PassengersAccordion({
  title,
  number,
  onChangeForm,
}: PassengersAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [valuepas, setValuePas] = useState("adult");
  const [valueDoc, setValueDoc] = useState("pasp");
  const [gender, setGender] = useState("");
  const { addDetail } = useActions();
  const seats = useTypedSelector((state) => state.seats);
  const detail = useTypedSelector((state) => state.order);
  //   console.log(detail);

  const [seat] = seats;
  const { adultSeats, childrensPlaces } = seat;

  const adultSeatsNum = parseInt(adultSeats, 10) || 0;
  const childrensNum = parseInt(String(childrensPlaces), 10) || 0;
  const seatsSum = adultSeatsNum + childrensNum;

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    patronymic: "",
    limited_mobility: "",
    birthday: "",
    documentData: "",
    num: seatsSum,
    is_adult: "",
    gender: "",
    document_data: "",
    document_dataSeries: "",
    document_type: "",
  });

  // ...

  //   useEffect(() => {
  //     const newDetails: IDetail[] = [];

  //     // Цикл для добавления объектов в зависимости от seatsSum
  //     newDetails.push({
  //       name: formData.name,
  //       last_name: formData.lastName,
  //       patronymic: formData.patronomic,
  //       limited_mobility: formData.limited_mobility === "true",
  //       is_adult: true,
  //       document_type: valueDoc === "pasp" ? "паспорт" : "свидетельство",
  //       birthday: formData.birthday,
  //       document_data: formData.documentData,
  //       is_child: false,
  //       include_children_seat: seats[0].without_childrens_seats,
  //       num: seatsSum,
  //     });

  //     addDetail(newDetails);
  //     // Вызываем action для обновления состояния
  //   }, [gender, formData, seats[0].without_childrens_seats, valuepas, valueDoc]);

  const handleInputChange = (field: string, value: string) => {
    const updatedData = {
      ...formData,
      [field]: value,
    };

    // Если поле, которое меняется, связано с полом (is_adult)
    if (field === "gender") {
      updatedData.gender = value;
    }
    if (field === "is_adult") {
      updatedData.is_adult = value;
    }
    if (field === "document_type") {
      updatedData.document_type = value;
    }

    // Вызываем onChange с обновленными данными
    if (onChangeForm) {
      onChangeForm(updatedData);
    }

    setFormData(updatedData);
  };

  function onClickGender(i: string) {
    setGender(i);
    handleInputChange("gender", i);
  }

  const getValueDoc = () => {
    return valueDoc ? optionsDocumen.find((c) => c.value === valueDoc) : "";
  };

  const getValue = (value: string, options: IOptions[]) => {
    return value ? options.find((c) => c.value === value) : "";
  };

  const onChange = (newValue: any) => {
    setValuePas(newValue.value);
    handleInputChange("is_adult", newValue.value);
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
    handleInputChange("document_type", newValue.value);
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
        {number ? `${title} ${number}` : `${title}`}
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
              <input
                id="surname"
                type="text"
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
              />
            </div>
            <div className="data__name">
              <label className="data__label" htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="data__patronymic">
              <label className="data__label" htmlFor="patronymic">
                Отчество
              </label>
              <input
                id="patronymic"
                type="text"
                value={formData.patronymic}
                onChange={(e) =>
                  handleInputChange("patronymic", e.target.value)
                }
              />
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
                value={formData.birthday}
                onChange={(e) => handleInputChange("birthday", e.target.value)}
              />
            </div>
            <div className="data__checkbox">
              <input
                type="checkbox"
                className="data__checkbox-check"
                value={formData.limited_mobility}
                onChange={(e) =>
                  handleInputChange(
                    "limited_mobility",
                    e.target.checked ? "true" : "false"
                  )
                }
              />
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
                  value={formData.document_dataSeries}
                  onChange={(e) =>
                    handleInputChange("document_dataSeries", e.target.value)
                  }
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
                value={formData.document_data}
                onChange={(e) =>
                  handleInputChange("document_data", e.target.value)
                }
              />
            </div>
          </div>
        </form>
        <div className="passenger__button">
          <span
            className="passenger__btn"
            // onClick={() =>
            //   addDetail({
            //     last_name: "",
            //     name: "",
            //     patronymic: "",
            //     payment_method: "",
            //     is_adult: true,
            //     birthday: "",
            //     document_type: "",
            //     document_data: "",
            //     is_child: false,
            //     include_children_seat: false,
            //   })
            // }
          >
            Следующий пассажир
          </span>
        </div>
      </div>
    </div>
  );
}
