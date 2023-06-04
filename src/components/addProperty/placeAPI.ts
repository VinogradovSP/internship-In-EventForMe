import { URL } from "@/constant";
import { Area } from "@/types/areaType";
import { Place } from "@/types/placeType";

export async function createPlace(data: Place, token: string) {
    //впоследствии этот промежуточный объект будет не нужен, отсылаться будет сразу data
    let requestBody = {
        title: data.title,
        city: data.city,
        metro: data.metro,
        address: data.address,
        longitude: data.longitude,
        width: data.width,
        id_yandex: data.id_yandex,
        start_time: data.start_time,
        finish_time: data.finish_time,
        fireworks: data.fireworks,
        children_kitchen: data.children_kitchen,
        alco: data.alco,
        payment_of_alco: data.payment_of_alco,
        lease_extension: data.lease_extension,
        lease_extension_price: data.lease_extension_price,
        average_check: data.average_check,
        description: data.description,
        parking: data.parking,
        max_serving: data.max_serving,
        type_place: data.type_place,
        location: data.location,
        kitchen: data.kitchen,
        event: data.event,
        type_feature: data.type_feature,
        //расхождение в названии, откорректировать потом
        type_territory: data.type_territory,
        place_img: data.place_img,
    }

    let response = await fetch(`${URL}catalog/places/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(requestBody),
    })

    if (response.ok) {
        let result = await response.json();
        // возвращаем id новой Площадки для следующих связанных пост-запросов
        return result.id;
    }

    return null
}


export async function createArea(area: Area, placeId: number, token: string) {
    area.place_id = placeId;
    // @ts-expect-error: ВРЕМЕННО пока на бэке неверный формат данных
    area.reserved_days =  "2023-05-14";
    //ВРЕМЕННО пока этого свойства нет на бэке
    delete area.bare_lease;

    let response = await fetch(`${URL}catalog/areas/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(area),
    })

    if (response.ok) {
        let result = await response.json();
        console.log(result);
    } else {
        console.log(response);
    }
}