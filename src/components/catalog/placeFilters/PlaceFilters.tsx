import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownCB from './DropdownCheckbox';
import styles from '@/styles/catalog/Catalog.module.scss';
import { filterParamsType } from '@/types/filter';
import * as options from './placeFilterOptions';

function PlaceFilters() {
    const router = useRouter();
    const initialFilterParamsState: filterParamsType = {
        city: '',
        capacity: [],
        scheme_of_payment: [],
        price: [],
        territory: [],
        more: [],
        additional: [],
    };
    const [filterParams, setFilterParams] = useState(initialFilterParamsState);
    const [city, setCity] = useState<string>('')
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCity(e.target.value);
    }

    function handleBlur (e: FocusEvent<HTMLInputElement>) {
        setFilterParams({ ...filterParams, city: city });

    }

    function filterParamsCallback(name: string, value: string[]) {
        setFilterParams({ ...filterParams, [name]: value });
    }

    function parseQueryParam(queryParams: string, param: string[]) {
        param.forEach((value) => {
            queryParams === '?' ? queryParams += '' : queryParams += '&'
            queryParams += value
        })
        return queryParams
    }

    useEffect(() => {
        let queryParams = '?';
        if (filterParams.city) {
            queryParams += `city=${filterParams.city}`
        }
        if (filterParams.capacity) {
            queryParams = parseQueryParam(queryParams, filterParams.capacity)
        }
        if (filterParams.scheme_of_payment) {
            queryParams = parseQueryParam(queryParams, filterParams.scheme_of_payment)
        }
        if (filterParams.price) {
            queryParams = parseQueryParam(queryParams, filterParams.price)
        }
        if (filterParams.territory) {
            queryParams = parseQueryParam(queryParams, filterParams.territory)
        }
        if (filterParams.more) {
            queryParams = parseQueryParam(queryParams, filterParams.more)
        }
        if (queryParams!=='?') {
            router.push(`/catalog/places${queryParams}`);
        } else {
            router.push(`/catalog/places`);
        }
        console.log(queryParams);
    }, [filterParams])

    return (
        <div className={styles.catalog__dropdown}>
            
                <Col className='d-sm-flex align-items-center justify-content-around flex-sm-wrap'>
                    <Dropdown>
                        <Dropdown.Toggle variant='outline-secondary' className={styles.catalog__dropdown_icon + ' px-2'}>
                            <i className={`fi-map-pin fs-lg opacity-60 me-1`} />
                            <p className={styles.catalog__dropdown_text}>Город</p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.catalog__dropdown_container}>
                            <FormControl type='text' placeholder='Введите город' onBlur={handleBlur} onChange={handleChange} value={city}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr className={styles.catalog__dropdown_hr} />
                    <DropdownCB
												className="px-2"
                        name='capacity'
                        text='Вместимость'
                        icon='fi-building'
                        setFilterParams={filterParamsCallback}
												options={options.CAPACITY}
                    />
                   <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
										className="px-2"
                    name='scheme_of_payment'
                    text='Схема оплаты'
                    icon='fi-home'
                    setFilterParams={filterParamsCallback}
                    options={options.SCHEME}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
										className="px-2"
                    name='price'
                    text='Средний чек'
                    icon='fi-wallet'
                    setFilterParams={filterParamsCallback}
                    options={options.PRICE}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
										className="px-2"
                    name='territory'
                    text='Территория'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.TERRITORY}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
										className="px-2"
                    name='more'
                    text='Еще на площадке'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.MORE}
                />
                <hr className={styles.catalog__dropdown_hr} />
                <DropdownCB
										className="px-2"
                    name='additional'
                    text='Дополнительно'
                    icon='fi-grid'
                    setFilterParams={filterParamsCallback}
                    options={options.ADD}
                />
            </Col>
						</div>
    )
}

export default PlaceFilters;
