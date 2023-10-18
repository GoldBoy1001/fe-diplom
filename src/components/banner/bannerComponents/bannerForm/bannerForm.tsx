import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./styleBannerFoerm.scss";
import InputDate from "./inputDate/inputDate";

export default function BannerForm() {
  const { pathname } = useLocation();
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  return (
    <div className="banner__directions">
      <div
        className={
          pathname === "/" ? "directions" : "directions directions-train"
        }
      >
        <label className="directions__label label-where" htmlFor="label-where">
          Направление
        </label>
        <input
          id="label-where"
          className="directions__where-from"
          type="text"
          placeholder="Откуда"
        />
        <input className="directions__where" type="text" placeholder="Куда" />
        <InputDate title="Дата" />
        {/* <label className="directions__label label-date" htmlFor="date">
          Дата
        </label>
        <input
          className="directions__date"
          id="date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={{ color: "#E5E5E5" }}
        /> */}
        <input
          style={{ color: "#E5E5E5" }}
          className="directions__departure-date"
          type="date"
        />
        <Link to={"/train"} className="directions__btn">
          найти билеты
        </Link>
      </div>
    </div>
  );
}
