import { useState } from "react";

import "./styleInput.scss";

interface InputTitleProps {
  title: string;
}

export default function InputDate({ title }: InputTitleProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  return (
    <>
      <label className="directions__label label-date" htmlFor="date">
        {title}
      </label>
      <input
        className="directions__date"
        id="date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        style={{ color: "#E5E5E5" }}
      />
    </>
  );
}
