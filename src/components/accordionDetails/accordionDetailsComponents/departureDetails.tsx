import "./departureDetails.scss";

interface DepartureDetailsProps {
  img: string;
}

export default function DepartureDetails({ img }: DepartureDetailsProps) {
  return (
    <div className="bar-details__detail">
      <div className="detail-bar">
        <div className="detail-bar__on-the-way">
          <span className="detail-bar__time">9 : 42 </span>
        </div>
        <div className="detail-bar__departure">
          <span className="detail-bar__time">00:10</span>
          <span className="detail-bar__date">30.08.2018</span>
        </div>
        <div className="detail-bar__arrival">
          <span className="detail-bar__time">00:10</span>
          <span className="detail-bar__date">30.08.2018</span>
        </div>
        <img className="detail-bar__img" src={img} alt="" />
        <div className="detail-bar__cityes-from">
          <span className="detail-bar__cityes-city">Москва </span>
          <span className="detail-bar__cityes-station">Курский вокзал</span>
        </div>
        <div className="detail-bar__cityes-where">
          <span className="detail-bar__cityes-city">Санкт-Петербург</span>
          <span className="detail-bar__cityes-station">Ладожский вокзал</span>
        </div>
      </div>
    </div>
  );
}
