export type PlaceCardType = {
  id: number;
  title: string;
  cover_place: string;
  areas: {
    id: number;
    type_area: {
      id: number;
      type_area: string;
    };
    min_capacity: number;
    max_capacity: number;
    min_price_banquet: number;
    min_price_rent: number;
  }[];
  images_place: {
    id: number;
    image: string;
    place: number;
  }[];
};

export type Place = {
  id: number;
  rating: {
    id: number;
    rating: number;
    votes: number;
  };
  user: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    avatar: string;
    is_bride: boolean;
  };
  address: {
    id: number;
    city: string;
    district: string;
    full: string;
  };
  area: Area[];
  image_vendor: string;
  title: string;
  category: string;
  min_price: number;
  description: string;
  short_description: string;
  capacity: string;
  placement: string;
  cuisine: string;
  hours: string;
  alcohol: string;
  lease: string;
  avg_price: number;
  fee: string;
  deposit: string;
  continue: string;
};

export type Area = {
  id: number;
  rating: {
    id: number;
    rating: number;
    votes: number;
  };
  image_area: string;
  title: string;
  time_location: number;
  place_location: string;
  min_price: number;
  payment_scheme: string;
  capacity: string;
};
