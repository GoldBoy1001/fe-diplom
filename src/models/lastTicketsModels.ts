

export interface ILastTickets {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: IAvailable_seats_info;
  departure: IDeparture;
}

interface IAvailable_seats_info {
  first: number;
  third: number;
  fourth: number;
  second: number;
}

interface IDeparture {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  duration: number;
  available_seats: number;
  available_seats_info: IAvailable_seats_info;
  train: ITrain;
  from: IFrom;
  to: ITo;
  price_info: IPrice_info;
}

interface ITrain {
  _id: string;
  name: string;
}

interface IFrom {
  railway_station_name: string;
  city: ICity;
  datetime: number;
}

interface ICity {
  _id: string;
  name: string;
}

interface ITo {
  railway_station_name: string;
  city: ICity;
  datetime: number;
}

interface IPrice_info {
  first: IFirst;
  third: IThird;
  fourth: IFourth;
  second: ISecond;
}

interface IFirst {
  price: number;
  top_price: number;
  bottom_price: number;
}

interface IThird {
  top_price: number;
  bottom_price: number;
  side_price: number;
}

interface IFourth {
  top_price: number;
  bottom_price: number;
}

interface ISecond {
  top_price: number;
  bottom_price: number;
}
