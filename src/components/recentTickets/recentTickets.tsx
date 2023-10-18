import "./styleRecentTickets.scss";

import dop from "../../img/svg/train-wifi.svg";

export default function RecentTickets() {
  return (
    <div className="recent-tickets__ticket">
      <p className="recent-tickets__from">
        Санкт-Петербург
        <span>Курский вокзал</span>
      </p>
      <p className="recent-tickets__where">
        Самара
        <span>Московский вокзал</span>
      </p>
      <div className="recent-tickets__image">
        <img src={dop} alt="" />
      </div>
      <div className="recent-tickets__price">
        от <span>2 500</span>
      </div>
    </div>
  );
}
