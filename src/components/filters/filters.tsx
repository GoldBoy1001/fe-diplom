import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { IOptions } from "../../models/selectModel";

import "./styleFilters.scss";
import { useActions } from "../../hooks/useActions";

const options: IOptions[] = [
  { value: "time", label: "времени" },
  { value: "costs", label: "стоимости" },
  { value: "durations", label: "длительности" },
];

export default function Filters() {
  const [value, setValue] = useState("time");
  const [count, setCount] = useState(5);
  const { addNumber } = useActions();

  function handlerClick(i: number) {
    setCount(i);
    addNumber(i);
  }

  const getValue = () => {
    return value ? options.find((c) => c.value === value) : "";
  };

  const onChange = (newValue: any) => {
    setValue(newValue.value);
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

  return (
    <div className="content__filters">
      <div className="filters">
        <p className="filters__found">найдено {20}</p>
        <div className="filters__filter">
          <span>сортировать по:</span>
          <Select
            classNamePrefix={"custom-select"}
            isSearchable={false}
            onChange={onChange}
            value={getValue()}
            options={options}
            components={makeAnimated()}
          />
        </div>
        <div className="filters__show">
          <div className="show__text">
            показывать по:{" "}
            <span
              onClick={() => handlerClick(5)}
              className={
                count === 5 ? "show__num show__num-active" : "show__num"
              }
            >
              5
            </span>
            <span
              onClick={() => handlerClick(10)}
              className={
                count === 10 ? "show__num show__num-active" : "show__num"
              }
            >
              10
            </span>
            <span
              onClick={() => handlerClick(20)}
              className={
                count === 20 ? "show__num show__num-active" : "show__num"
              }
            >
              20
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
