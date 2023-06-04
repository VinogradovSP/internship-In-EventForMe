export type Area = {
  place_id?: number;
  title: string;
  cover_area: string;
  type_area: TypeArea;
  min_capacity: number;
  max_capacity: number;
  color_hall: string;
  separate_entrance: boolean;
  sale: string;
  min_price_banquet: number;
  min_price_rent: number;
  deposit: number;
  scheme_of_payment: string;
  detail_location: string;
  images_area: AreaImages[] | [];
  bare_lease?: boolean;
  reserved_days: string;
  // reserved_dates: Date[];
};

type TypeArea = {
  id: number;
  type_area: string;
};

export type AreaImages = {
  id: number;
  image: string;
  area: number;
};
