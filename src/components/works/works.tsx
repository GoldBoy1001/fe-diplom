import "./styleWorks.scss";

import ball from "../../img/svg/works1.svg";
import screen from "../../img/svg/works2.svg";
import building from "../../img/svg/works3.svg";

export default function Works() {
  return (
    <section className="works" id="#works">
      <span></span>
      <div className="works__body">
        <h3 className="works__title">Как это работает</h3>
        <button className="works__btn">Узнать больше</button>

        <div className="column-works column-works1">
          <img className="column-works__img" src={ball} alt="Иконка монитора" />
          <p className="column-works__text">Удобный заказ на сайте</p>
        </div>
        <div className="column-works column-works2">
          <img className="column-works__img" src={screen} alt="Иконка здания" />
          <p className="column-works__text ">Нет необходимости ехать в офис</p>
        </div>
        <div className="column-works column-works3">
          <img
            className="column-works__img"
            src={building}
            alt="Иконка земного шара"
          />
          <p className="column-works__text">Огромный выбор направлений</p>
        </div>
      </div>
    </section>
  );
}
