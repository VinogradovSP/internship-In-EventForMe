import { Place } from "@/types/catalog";
import { URL } from "@/constant";


export async function fetchAllPlaces(): Promise<Place[] | undefined> {
    let response = await fetch(`${URL}places/`)
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchPlaceById(id: number): Promise<Place | undefined> {
  let response = await fetch(`${URL}places/${id}/`)
if (response.ok) {
  let result = await response.json();
  return result;
} else {
  console.log(response);
}
}