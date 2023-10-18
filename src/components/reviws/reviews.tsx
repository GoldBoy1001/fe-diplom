import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styleReviews.scss";

import accountImg1 from "../../img/review1.jpg";
import accountImg2 from "../../img/review2.jpg";

export default function Reviews() {
  return (
    <section className="reviews" id="#reviews">
      <div className="reviews__body">
        <h3 className="reviews__title">отзывы</h3>
        <Swiper
          className="my-swiper"
          modules={[Pagination, Scrollbar]}
          spaceBetween={150}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg1}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Екатерина Вальнова</p>
              <p className="item-reviews__text">
                "Доброжелательные подсказки на всех этапах помогут правильно
                заполнить поля и без затруднений купить авиа или ж/д билет, даже
                если вы заказываете онлайн билет впервые."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg2}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Евгений Стрыкало</p>
              <p className="item-reviews__text">
                "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                за 3 часа до отправления мы пришлем вам СМС-напоминание о
                поездке."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg1}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Екатерина Вальнова</p>
              <p className="item-reviews__text">
                "Доброжелательные подсказки на всех этапах помогут правильно
                заполнить поля и без затруднений купить авиа или ж/д билет, даже
                если вы заказываете онлайн билет впервые."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg2}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Евгений Стрыкало</p>
              <p className="item-reviews__text">
                "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                за 3 часа до отправления мы пришлем вам СМС-напоминание о
                поездке."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg1}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Екатерина Вальнова</p>
              <p className="item-reviews__text">
                "Доброжелательные подсказки на всех этапах помогут правильно
                заполнить поля и без затруднений купить авиа или ж/д билет, даже
                если вы заказываете онлайн билет впервые."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-reviews">
              <img
                className="item-reviews__img"
                src={accountImg2}
                alt="Фото клиента"
              />
              <p className="item-reviews__name">Евгений Стрыкало</p>
              <p className="item-reviews__text">
                "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                за 3 часа до отправления мы пришлем вам СМС-напоминание о
                поездке."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
