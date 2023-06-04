import { ParsedUrlQuery } from 'querystring';

export function getQueryParams(parsedQuery: ParsedUrlQuery): string {
    const page = parsedQuery.page;
    const city = parsedQuery.city;
    const place_style = parsedQuery.place_style;
    //параметры с множественными вариантами
    const scheme_of_payment = parsedQuery.scheme_of_payment;
    const territory = parsedQuery.territory;
    const type_feature = parsedQuery.type_feature;
    //числовые параметры
    const min_average_check = parsedQuery.min_average_check;
    const max_average_check = parsedQuery.max_average_check;
    const min_capacity = parsedQuery.min_capacity;
    const max_capacity = parsedQuery.max_capacity;
    //сортировка
    const ordering = parsedQuery.ordering;

    let query = '?';

    if (page) {
        query === '?' ? query += '' : query += '&'
        query += `page=${page}`
    }
    if (city) {
        query === '?' ? query += '' : query += '&'
        query += `city=${city}`
    }
    if (place_style) {
        if (Array.isArray(place_style)) {
            place_style.forEach((style) => {
                query === '?' ? query += '' : query += '&'
                query += `place_style=${style}`
            }
            )
        } else {
            query === '?' ? query += '' : query += '&'
            query += `place_style=${place_style}`
        }
    }
    if (scheme_of_payment) {
        query === '?' ? query += 'scheme_of_payment=' : query += '&scheme_of_payment='
        if (Array.isArray(scheme_of_payment)) {
            scheme_of_payment.forEach((scheme, i) => {
                if (i !== scheme_of_payment.length - 1) {
                    query += `${scheme},`
                } else {
                    query += `${scheme}`
                }
            })
        } else {
            query += `scheme_of_payment=${scheme_of_payment}`
        }
    }
    if (territory) {
        query === '?' ? query += 'territory=' : query += '&territory='
        if (Array.isArray(territory)) {
            territory.forEach((terr, i) => {
                if (i !== territory.length - 1) {
                    query += `${terr},`
                } else {
                    query += `${terr}`
                }
            })
        } else {
            query += `${territory}`
        }
    }
    if (type_feature) {
        if (Array.isArray(type_feature)) {
            query === '?' ? query += 'type_feature=' : query += '&type_feature='
            type_feature.forEach((feature, i) => {
                if (i !== type_feature.length - 1) {
                    query += `${feature},`
                } else {
                    query += `${feature}`
                }
            })
        } else {
            query += `type_feature=${type_feature}`
        }
    }
    if (min_average_check) {
        query === '?' ? query += '' : query += '&'
        if (Array.isArray(min_average_check)) {
            let result = min_average_check.map(function (x) {
                return parseInt(x, 10);
            });
            let min = Math.min(...result)
            query += `min_average_check=${min}`
        } else {
            query += `min_average_check=${min_average_check}`
        }
    }
    if (max_average_check) {
        query === '?' ? query += '' : query += '&'
        if (Array.isArray(max_average_check)) {
            let result = max_average_check.map(function (x) {
                return parseInt(x, 10);
            });
            let max = Math.max(...result)
            query += `max_average_check=${max}`
        } else {
            query += `max_average_check=${max_average_check}`
        }
    }
    if (min_capacity) {
        query === '?' ? query += '' : query += '&'
        if (Array.isArray(min_capacity)) {
            let result = min_capacity.map(function (x) {
                return parseInt(x, 10);
            });
            let min = Math.min(...result)
            query += `min_capacity=${min}`
        } else {
            query += `min_capacity=${min_capacity}`
        }
    }
    if (max_capacity) {
        query === '?' ? query += '' : query += '&'
        if (Array.isArray(max_capacity)) {
            let result = max_capacity.map(function (x) {
                return parseInt(x, 10);
            });
            let max = Math.max(...result)
            query += `max_capacity=${max}`
        } else {
            query += `max_capacity=${max_capacity}`
        }
    }
    if (ordering) {
        query === '?' ? query += '' : query += '&'
        query += `ordering=${ordering}`
    }

    return query;
}

export function getQueryParamsWithoutParam(parsedQuery: ParsedUrlQuery, excludedParam: string): string {
    let query = parsedQuery;
    if (query[excludedParam]) {
        delete query[excludedParam]
    }
    return getQueryParams(query);
}