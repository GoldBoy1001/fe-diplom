import "./styleAbout.scss";

export default function About() {
  return (
    <section className="about" id="#about">
      <div className="about__body">
        <span></span>
        <h3 className="about__title">о нас</h3>
        <p className="about__text">
          Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем все больше людей заказывают жд билеты
          через интернет.
        </p>

        <p className="about__text">
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать? Мы расскажем о преимуществах заказа через
          интернет.
        </p>

        <p className="about__text about__text-black">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </p>
      </div>
    </section>
  );
}
