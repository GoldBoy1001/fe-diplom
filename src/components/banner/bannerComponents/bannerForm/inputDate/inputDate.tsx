import { useState } from "react";

import "./styleInput.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface InputTitleProps {
  title: string;
  value: string;
  onChange: (newValue: string) => void;
}

export default function InputDate({ title, value, onChange }: InputTitleProps) {
  const { pathname } = useLocation();
  const [selectedDateColor, setSelectedDateColor] = useState("#E5E5E5");
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setSelectedDateColor("#292929");
  };

  useEffect(() => {
    if (value) {
      setSelectedDateColor("#292929");
    } else {
      setSelectedDateColor("#E5E5E5");
    }
  }, [value]);
  return (
    <>
      <label className="directions__label label-date" htmlFor="date">
        {title}
      </label>
      <input
        className="directions__date"
        id="date"
        type="date"
        value={value}
        onChange={handleDateChange}
        style={{ color: selectedDateColor }}
      />
    </>
  );
}
