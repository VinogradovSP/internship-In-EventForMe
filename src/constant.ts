export const URL = "http://letarist.pythonanywhere.com/api/test_api/";

// для футера
export type FooterConst = {
    title: string,
    data:
        {
            id: number,
            name: string,
            url: string,
        }[]
}

export const SERVICES: FooterConst = {title: 'Услуги', data:
    [
        {
            id: 1,
            name: 'Чек-листы',
            url: '#',
        },
        {
            id: 2,
            name: 'Калькулятор бюджета',
            url: '#',
        },
        {
            id: 3,
            name: 'Рассадка гостей',
            url: '#',
        },
        {
            id: 5,
            name: 'Свадебные приглашения',
            url: '#',
        },
        {
            id: 6,
            name: 'Свадебные сайты',
            url: '#',
        },{
            id: 7,
            name: 'Найти подрядчиков',
            url: '#',
        },

    ]
}

export const PAGES: FooterConst = {title: 'Страницы', data:
    [
        {
            id: 1,
            name: 'Каталог',
            url: '/catalog',
        },
        {
            id: 2,
            name: 'Свадебные вдохновения',
            url: '#',
        },
        {
            id: 3,
            name: 'Свадебный сайт',
            url: '#',
        },
        {
            id: 5,
            name: 'Хештеги',
            url: '#',
        },
        {
            id: 6,
            name: 'Приглашения',
            url: '#',
        },{
            id: 7,
            name: 'Блог',
            url: '#',
        },
    ]
}

export const PLACES: FooterConst = {title: 'Площадки', data:
    [
        {
            id: 1,
            name: 'Каталог',
            url: '/catalog',
        },
        {
            id: 2,
            name: 'Свадебные вдохновения',
            url: '#',
        },
        {
            id: 3,
            name: 'Свадебный сайт',
            url: '#',
        },
        {
            id: 5,
            name: 'Хештеги',
            url: '#',
        },
        {
            id: 6,
            name: 'Приглашения',
            url: '#',
        },{
            id: 7,
            name: 'Блог',
            url: '#',
        },
    ]
}


export const ACTORS: FooterConst = {title: 'Исполнители', data:
    [
        {
            id: 1,
            name: 'Каталог',
            url: '/catalog',
        },
        {
            id: 2,
            name: 'Свадебные вдохновения',
            url: '#',
        },
        {
            id: 3,
            name: 'Свадебный сайт',
            url: '#',
        },
        {
            id: 5,
            name: 'Хештеги',
            url: '#',
        },
        {
            id: 6,
            name: 'Приглашения',
            url: '#',
        },{
            id: 7,
            name: 'Блог',
            url: '#',
        },
    ]
}
