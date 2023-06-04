import { Place } from "@/types/catalog";
import { URL } from "@/constant";

const API = process.env.NODE_ENV === 'production'? process.env.URL : URL;

export async function fetchAllPlaces(): Promise<Place[] | undefined> {
    let response = await fetch(`${API}catalog/places/`)
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchPlaceById(id: number): Promise<Place | undefined> {
  let response = await fetch(`${API}catalog/places/${id}/`)
if (response.ok) {
  let result = await response.json();
  return result;
} else {
  console.log(response);
}
}

//подставить API от бэка на топ-5 площадок
export async function fetchTopPlaces(): Promise<Place[] | undefined> {
  let response = await fetch(`${API}catalog/places/`)
if (response.ok) {
  let result = await response.json();
  return result.slice(0, 5);
} else {
  console.log(response);
}
}
