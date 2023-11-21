import "./styleLoading.scss";

import train from "../../img/svg/train-anime.png";

export default function Loading() {
  return (
    <section className="loading">
      <div className="loading__body">
        <div className="loading__animated">
          <p className="loading__animated-text">идет поиск</p>
          <div className="loading__animated-image">
            {[1, 2, 3].map((index) => (
              <img
                key={index}
                className="loading__animated-img"
                src={train}
                alt={`Train ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
