import { Dispatch, SetStateAction } from "react";
import { DaDataValue, DaDataValues } from "@/types/dadata";
import { SUG_URL, TOKEN } from '@/constant';

export async function fetchAddress(
    query: string,
    setSuggestions: Dispatch<SetStateAction<DaDataValue[] | undefined>>,
    setGeodata: (lat: number, lon: number) => void
) {
    let apiToken = (process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_DADATA : TOKEN);

    let data = { "query": query };
    let response = await fetch(SUG_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
    })
    let result: DaDataValues = await response.json();
    setSuggestions(result.suggestions);
    if (result?.suggestions[0]?.data.geo_lat && result?.suggestions[0]?.data.geo_lon) {
        setGeodata(+result.suggestions[0].data.geo_lat, +result.suggestions[0].data.geo_lon);
    }
}