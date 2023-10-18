import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import "./styleHeader.scss";
import { useState } from "react";

export default function Header() {
  const [count, setCount] = useState("");

  function handlerClick(i: string) {
    setCount(i);
  }
  return (
    <header className="header">
      <span className="header-sp1"></span>
      <span className="header-sp2"></span>
      <Link to={"/"} className="header__logo">
        Лого
      </Link>
      <nav className="nav">
        <ul className="header__list">
          <li>
            <Scroll
              onClick={() => handlerClick("about")}
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              className={
                count === "about"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              O нас
            </Scroll>
          </li>
          <li>
            <Scroll
              to={"works"}
              smooth={true}
              duration={500}
              onClick={() => handlerClick("works")}
              className={
                count === "works"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              Как это работает
            </Scroll>
          </li>
          <li>
            <Scroll
              to={"reviews"}
              smooth={true}
              duration={500}
              onClick={() => handlerClick("reviews")}
              className={
                count === "reviews"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              Отзывы
            </Scroll>
          </li>
          <li>
            <Scroll
              to={"footer"}
              smooth={true}
              duration={500}
              onClick={() => handlerClick("footer")}
              className={
                count === "footer"
                  ? "header__link header__link-active"
                  : "header__link"
              }
            >
              Контакты
            </Scroll>
          </li>
        </ul>
      </nav>
    </header>
  );
}
