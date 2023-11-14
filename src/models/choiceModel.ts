

export interface IChoceOfPlace {
  coach: ICoach;
  seats: ISeat[];
}

export interface ICoach {
  _id: string;
  name: string;
  class_type: string;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
  is_linens_included: boolean;
  available_seats: number;
  train: string;
}

interface ISeat {
  index: number;
  available: boolean;
}