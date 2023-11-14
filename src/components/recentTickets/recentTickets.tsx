import "./styleRecentTickets.scss";

import dop from "../../img/svg/train-wifi.svg";
import { ILastTickets } from "../../models/lastTicketsModels";

interface RecentTicketsProps {
  items: ILastTickets;
}

export default function RecentTickets({ items }: RecentTicketsProps) {
  return (
    <div className="recent-tickets__ticket">
      <p className="recent-tickets__from">
        {items.departure.from.city.name}
        <span>{items.departure.from.railway_station_name}</span>
      </p>
      <p className="recent-tickets__where">
        {items.departure.to.city.name}
        <span>{items.departure.to.railway_station_name}</span>
      </p>
      <div className="recent-tickets__image">
        <img src={dop} alt="" />
      </div>
      <div className="recent-tickets__price">
        от <span>{items.min_price}</span>
      </div>
    </div>
  );
}
