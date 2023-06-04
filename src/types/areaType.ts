export type Area = {
  place_id?: number;
  title: string;
  cover_area?: string;
  type_area: string;
  min_capacity: number;
  max_capacity: number;
  color_hall: string;
  separate_entrance: boolean;
  sale: string;
  min_price_banquet: number;
  min_price_rent: number;
  deposit: number;
  scheme_of_payment: 'bah' | 'ban' | 'hall';
  detail_location: string;
  area_img: string[];
  bare_lease?: boolean;
  reserved_days: Date[];
};

//тип приходящего с бека Area
export type AreaRecieved = Omit<
  Area,
  'type_area' | 'images_area' | 'place_id' | 'color_hall' | 'reserved_days'
> & {
  images_area: AreaImages[] | [];
  type_area: TypeArea;
  place: number;
  reserved_days: 'string';
  color_hall:
    | 'white'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'lblue'
    | 'blue'
    | 'purple'
    | 'beige';
};

type TypeArea = {
  id: number;
  type_area:
    | 'bqh'
    | 'tent'
    | 'vrnd'
    | 'ycc'
    | 'mts'
    | 'loft'
    | 'mnr'
    | 'rsrn'
    | 'cafe'
    | 'rct'
    | 'ctg'
    | 'htl'
    | 'cst'
    | 'cntc'
    | 'cntn';
};

export type AreaImages = {
  id: number;
  image: string;
  area: number;
};
