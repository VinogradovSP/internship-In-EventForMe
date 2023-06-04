export const CAPACITY = [
    ['min_capacity=10&max_capacity=30', 'от 10 до 30'],
    ['min_capacity=30&max_capacity=60', 'от 30 до 60'],
    ['min_capacity=60&max_capacity=100', 'от 60 до 100'],
    ['min_capacity=100&max_capacity=150', 'от 100 до 150'],
    ['min_capacity=150', 'от 150'],
  ];

  //такого фильтра на бэке нет
  export const SCHEME = [
    ['scheme_of_payment=bah', 'Аренда зала + банкет'],
    ['scheme_of_payment=ban', 'Только банкет'],
    ['scheme_of_payment=hall', 'Только зал'],
  ];

  export const PRICE = [
    ['min_average_check=0&max_average_check=1000', 'до 1000 ₽'],
    ['min_average_check=1000&max_average_check=2000', 'от 1000 ₽ до 2000 ₽'],
    ['min_average_check=2000&max_average_check=3000', 'от 2000 ₽ до 3000 ₽'],
    ['min_average_check=3000', 'Другое'],
  ];

  export const TERRITORY = [
    ['territory=park', 'Своя парковка'],
    ['territory=welc', 'Welcome-зона'],
    ['territory=fire', 'Место под фаер-шоу'],
    ['territory=firew', 'Можно фейерверк'],
    ['territory=hotel', 'Отель рядом'],
    ['territory=kids', 'Детская игровая зона'],
    ['territory=phot', 'Фотозона'],
    ['territory=reg', 'С выездной регистрацией'],
    ['territory=pan', 'Панорамный вид'],
    ['territory=guesth', 'Отель для гостей'],
  ];
  
  export const MORE = [
    ['type_feature=guestr', 'Номер для гостей'],
    ['type_feature=room', 'Номер для новобрачных'],
    ['type_feature=proj', 'Есть проектор'],
    ['type_feature=tv', 'ТВ-экраны'],
    ['type_feature=dance', 'Есть танцпол'],
    ['type_feature=scen', 'Есть сцена'],
    ['type_feature=brid', 'Есть комната невесты'],
    ['type_feature=dress', 'Есть примерочная'],
    ['type_feature=pan', 'Панорамный вид'],
    ['type_feature=phot', 'Фотозона'],
  ];

  //таких фильтров на бэке нет
  export const ADD = [
    ['1000-2000', 'Свой алкоголь'],
//этот добавить
    ['1000', 'Аренда без еды'],
    ['2000-3000', 'Без проб. сбора'],
    ['other', 'Можно праздновать после 23:00'],
  ];  