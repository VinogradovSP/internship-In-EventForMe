import { Area } from './areaType';

export type Place = {
  title: string;
  city: string;
  metro?: string;
  address: string;
  longitude: number;
  width: number;
  id_yandex?: string;
  start_time: Date;
  finish_time: Date;
  fireworks: boolean;
  children_kitchen: boolean;
  alco: boolean;
  payment_of_alco: number;
  lease_extension: boolean;
  lease_extension_price: number;
  average_check: number;
  description: string;
  parking: number;
  max_serving: number;
  type_place: number[];
  location: number[];
  kitchen: number[];
  event: number[];
  type_feature: number[];
  type_territory: number[];
  areas: Area[];
  // territory: number[];
  place_img: string[];
  // под эти поля еще нет бэка
  territory_desc?: string;
  welcome_desc?: string;
  outreg_price?: number;
  outreg_desc?: string;
  outreg_conditions?: string;
};

export type Album = {
  title: string;
  album_img: string[];
};
