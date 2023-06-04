import {
  Event,
  Feature,
  Kitchen,
  Location,
  TypePlace,
} from '@/types/placeType';

export const makeUniversalNumberArr = (
  array: number[] | Feature[] | TypePlace[] | Location[] | Event[] | Kitchen[]
): number[] => {
  return array.map((item) => (typeof item === 'number' ? item : item.id));
};
