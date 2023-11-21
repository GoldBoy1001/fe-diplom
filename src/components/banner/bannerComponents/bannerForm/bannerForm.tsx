import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ICity, IDate } from "../../../../models/selectModel";

import "./styleBannerFoerm.scss";
import InputDate from "./inputDate/inputDate";
import { useSearchCitiesQuery } from "../../../../store/ticket/ticket.api";
import { useDebounce } from "../../../../hooks/debonce";
import { ICyties } from "../../../../models/selectModel";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

export default function BannerForm() {
  const { addCity, addDate, addId } = useActions();
  const [search, setSearch] = useState("");
  const [searchWhere, setSearchWhere] = useState("");
  const debounce = useDebounce(search);
  const debounce2 = useDebounce(searchWhere);
  const [drop, setDrop] = useState(false);
  const [dropWhere, setDropWhere] = useState(false);
  const { pathname } = useLocation();
  const city = useTypedSelector((state) => state.city);
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [selectedDateColor, setSelectedDateColor] = useState("#E5E5E5");
  const { data } = useSearchCitiesQuery(debounce, {
    skip: debounce.length < 1,
  });

  const { data: data2 } = useSearchCitiesQuery(debounce2, {
    skip: debounce2.length < 1,
  });

  useEffect(() => {
    data?.forEach((i) => {
      if (i.name !== debounce) {
        setDrop(debounce.length > 0 && data?.length! > 0);
      } else {
        setDrop(false);
      }
    });
  }, [debounce, data]);

  useEffect(() => {
    data2?.forEach((i) => {
      if (i.name !== debounce2 && i.name) {
        setDropWhere(debounce2.length > 0 && data2?.length! > 0);
      } else {
        setDropWhere(false);
      }
    });
  }, [debounce2, data2]);

  const handleSearchChange = (
    name: string,
    setSearchFunction: (name: string) => void,
    setDropFunction: (value: boolean) => void,
    cityes: string
  ) => {
    if (cityes === "city1") {
      addCity({ city1: debounce, city2: (city[0] as ICity).city2 });
    }
    if (cityes === "city2") {
      addCity({ city1: (city[0] as ICity).city1, city2: debounce2 });
    }
    setSearchFunction(name);
    setDropFunction(name.length > 0 && data?.length! > 0);
  };

  const handleClick = (
    { name }: ICyties,
    setSearchFunction: (name: string) => void
  ) => {
    setSearchFunction(name); // You can also use setSearch2(i.name) if needed
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate2(e.target.value);
    setSelectedDateColor("#292929");
  };
  //   console.log(debounce);

  useEffect(() => {
    if ((city[1] as IDate)?.date2 && pathname !== "/") {
      setSelectedDateColor("#292929");
    } else {
      setSelectedDateColor("#E5E5E5");
    }
  }, [pathname]);

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
        <div className="where-from">
          <input
            id="label-where"
            className="directions__where-from"
            type="text"
            placeholder="Откуда"
            value={
              pathname !== "/" && (city[0] as ICity).city1
                ? search || (city[0] as ICity).city1
                : search
            }
            onChange={(e) =>
              handleSearchChange(e.target.value, setSearch, setDrop, "city1")
            }
          />
          {drop && (
            <ul className="where-from__drop">
              {data?.map((cyty) => (
                <li onClick={() => handleClick(cyty, setSearch)} key={cyty._id}>
                  {cyty.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="where">
          <input
            className="directions__where"
            type="text"
            placeholder="Куда"
            value={
              pathname !== "/" && (city[0] as ICity).city2
                ? searchWhere || (city[0] as ICity).city2
                : searchWhere
            }
            onChange={(e) =>
              handleSearchChange(
                e.target.value,
                setSearchWhere,
                setDropWhere,
                "city2"
              )
            }
          />
          {dropWhere && (
            <ul className="where__drop">
              {data2?.map((cyty) => (
                <li
                  onClick={() => handleClick(cyty, setSearchWhere)}
                  key={cyty._id}
                >
                  {cyty.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <InputDate
          title="Дата"
          value={
            pathname !== "/" && city
              ? (city[1] as IDate).date1 || selectedDate1
              : selectedDate1
          }
          onChange={(newValue) => setSelectedDate1(newValue)}
        />
        <input
          style={{ color: selectedDateColor }}
          className="directions__departure-date"
          type="date"
          value={
            pathname !== "/" && city
              ? (city[1] as IDate).date2 || selectedDate2
              : selectedDate2
          }
          onChange={handleDateChange}
        />
        <Link
          to={"/train"}
          className="directions__btn"
          onClick={() => {
            addCity({ city1: debounce, city2: debounce2 });
            addDate({ date1: selectedDate1, date2: selectedDate2 });
            {
              data && data2
                ? addId({ id1: data[0]._id, id2: data2[0]._id })
                : addId({ id1: "", id2: "" });
            }
          }}
        >
          найти билеты
        </Link>
      </div>
    </div>
  );
}
