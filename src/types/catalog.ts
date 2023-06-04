export type Place = {
      "id": number,
      "rating": {
        "id": number,
        "rating": number,
        "votes": number
      },
      "user": {
        "id": number,
        "name": string,
        "surname": string,
        "patronymic": string,
        "avatar": string,
        "is_bride": true
      },
      "address": {
        "id": 0,
        "city": string,
        "district": string,
        "full": string
      },
      "area": [
        {
          "id": number,
          "rating": {
            "id": number,
            "rating": number,
            "votes": number
          },
          "image_area": string,
          "title": string,
          "time_location": number,
          "place_location": string,
          "min_price": number,
          "payment_scheme": string,
          "capacity": string
        }
      ],
      "image_vendor": string,
      "title": string,
      "category": string,
      "min_price": number,
      "description": string,
      "short_description": string
    }

  export type Area = {
    "id": number,
    "rating": {
      "id": number,
      "rating": number,
      "votes": number
    },
    "image_area": string,
    "title": string,
    "time_location": number,
    "place_location": string,
    "min_price": number,
    "payment_scheme": string,
    "capacity": string
  }