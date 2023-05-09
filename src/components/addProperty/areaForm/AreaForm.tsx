import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Dropdown, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BasicForm from '../basicForm/BasicForm';
import FileUploader from '../fileUploader/FileUploader';
import AreaFormDatePicker from './AreaFormDatePicker';
import DetailsTextarea from '../detailsTextarea/DetailsTextarea';
import { Area } from '@/types/areaType';
import { COLOR_HALL, SCHEME_OF_PAYMENT, TYPE_AREA } from '@/constant';
import styles from '@/styles/addproperty/AreaForm.module.scss';

type AreaFormProps = {
    index: number,
    areas: Area[],
    setAreas: Dispatch<SetStateAction<Area[]>>
}

function AreaForm({ index, areas, setAreas }: AreaFormProps) {
    let initialAreaFormState: Area = {
        title: '',
        type_area: '',
        min_capacity: 0,
        max_capacity: 0,
        color_hall: '',
        separate_entrance: false,
        sale: '',
        min_price_banquet: 0,
        min_price_rent: 0,
        deposit: 0,
        detail_location: '',
        scheme_of_payment: '',
        bare_lease: false,
        reserved_dates: [],
    }
    const [area, setArea] = useState<Area>(initialAreaFormState);
    //обработчик для стандартных инпутов type=text
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setArea({ ...area, [e.target.name]: e.target.value });
    }
    //обработчик для стандартных инпутов type=number
    function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
        setArea({ ...area, [e.target.name]: +e.target.value });
    }
    // тип (any пришлось поставить из-за Бутсрапа)
    const [selectedType, setSelectedType] = useState<string>('');
    function handleTypeSelect(eventKey: any, e: any) {
        setArea({ ...area, ['type_area']: eventKey });
        setSelectedType(e.target.name);
    }
    // цвет
    function handleColorSelect(eventKey: any) {
        setArea({ ...area, ['color_hall']: eventKey });
    }
    // схема оплаты
    const [selectedScheme, setSelectedScheme] = useState<string>('');
    function handleSchemeSelect(eventKey: any, e: any) {
        setArea({ ...area, ['scheme_of_payment']: eventKey });
        setSelectedScheme(e.target.name);
    }
    // даты брони
    function handleDateChange(date: Date, id: number) {
        let newArr = [...area.reserved_dates];
        if (newArr[id] && date === null) {
            newArr.splice(id, 1);
        } else {
            newArr[id] = date;
        }
        setArea({ ...area, ['reserved_dates']: newArr })
    }
    // Загрузка картинок
    const [gallery, setGallery] = useState<string[]>([]);

    //при изменении объекта Площадки - прокидываем в общий спискок мест
    useEffect(() => {
        let newAreasArr = [...areas];
        newAreasArr[index] = area;
        setAreas(newAreasArr);
    }, [area])

    return (
        <>
            <h2 className='h4 mb-4'>
                <i className='fi-party-popper text-primary fs-5 mt-n1 me-2'></i>
                Помещения
            </h2>
            <BasicForm title={area.title} location={false} handleChange={handleChange} />
            <FileUploader gallery={gallery} setGallery={setGallery} />

            {/* Тип, Вместимость, Цвет */}
            <Row className={styles.group_container + ' mb-4'}>
                <Form.Group as={Col} controlId='type_area'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Тип\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <Dropdown onSelect={handleTypeSelect}>
                        <Dropdown.Toggle variant='outline-secondary' className={styles.dropdown__item}>
                            {selectedType || "-----"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {TYPE_AREA.map((option, indx) =>
                                <Dropdown.Item key={indx} name={option[1]} eventKey={option[0]}>
                                    {option[1]}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>

                <Form.Group as={Col} controlId='min_capacity' className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Вместимость\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <div className={styles.capacity__group}>
                        <Form.Control
                            name='min_capacity'
                            placeholder='от 30'
                            type='number'
                            min="30"
                            max="60"
                            value={area.min_capacity || undefined}
                            onChange={handleNumberChange}
                            className={styles.capacity__input}
                            required
                        />
                        <Image className={styles.capacity__img} src={'/Line.png'} alt={'inbetween'} width={32} height={1} />
                        <Form.Control
                            name='max_capacity'
                            placeholder='до 60'
                            type='number'
                            min="30"
                            max="60"
                            value={area.max_capacity || undefined}
                            onChange={handleNumberChange}
                            className={styles.capacity__input}
                            required
                        />
                    </div>
                </Form.Group>

                <Form.Group as={Col} controlId='color_hall'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Цвет зала\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <Dropdown onSelect={handleColorSelect}>
                        <Dropdown.Toggle variant='outline-secondary' className={styles.dropdown__item}>
                            {area.color_hall || "---"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            {COLOR_HALL.map((option, indx) =>
                                <Dropdown.Item key={indx} eventKey={option}>
                                    {option}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Row>

            {/* Отдельный вход */}
            <Row className='mb-4'>
                <Form.Group controlId='separate_entrance' >
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Есть отдельный вход\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <div className={styles.radio__item}>
                        <Form.Check
                            type='radio'
                            name='separate_entrance'
                            value={1}
                            checked={area.separate_entrance}
                            onChange={(e) => setArea({ ...area, ['separate_entrance']: true })}
                        /> Да
                    </div>
                    <div className={styles.radio__item}>
                        <Form.Check
                            type='radio'
                            value={0}
                            checked={!area.separate_entrance}
                            onChange={(e) => setArea({ ...area, ['separate_entrance']: false })}
                        /> Нет
                    </div>
                </Form.Group>
            </Row>

            {/* Скидка, подарок */}
            <Row className='mb-4'>
                <Form.Group controlId='sale'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>{'Подарок/скидка за аренду помещения\u00a0'}<span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        name='sale'
                        placeholder={'Например, номер для молодоженов'}
                        maxLength={100}
                        value={area.sale}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>

            {/* Цены, депозит */}
            <Row className='align-items-end mb-4'>
                <Form.Group as={Col} controlId='min_price_banquet'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Минимальная цена банкета'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            name='min_price_banquet'
                            placeholder='от 10 000'
                            type='number'
                            min="10000"
                            value={area.min_price_banquet || undefined}
                            onChange={handleNumberChange}
                            className={styles.capacity__input}
                            required
                        />
                        <InputGroup.Text id='icon-addon'>₽</InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId='min_price_rent'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Минимальная цена аренды\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            name='min_price_rent'
                            placeholder='от 10 000'
                            type='number'
                            min="10000"
                            value={area.min_price_rent || undefined}
                            onChange={handleNumberChange}
                            className={styles.capacity__input}
                            required
                        />
                        <InputGroup.Text id='icon-addon'>₽</InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId='deposit'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Депозит\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            name='deposit'
                            placeholder='от 10 000'
                            type='number'
                            min="10000"
                            value={area.deposit || undefined}
                            onChange={handleNumberChange}
                            className={styles.capacity__input}
                            required
                        />
                        <InputGroup.Text id='icon-addon'>₽</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            {/* Схема оплаты */}
            <Row className='mb-4'>
                <Form.Group controlId='scheme_of_payment'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Схема оплаты\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <Dropdown onSelect={handleSchemeSelect}>
                        <Dropdown.Toggle variant='outline-secondary' className={styles.dropdown__item}>
                            {selectedScheme || "-----"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {SCHEME_OF_PAYMENT.map((option, indx) =>
                                <Dropdown.Item key={indx} name={option[1]} eventKey={option[0]}>
                                    {option[1]}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Row>

            {/* Аренда без еды */}
            <Row className='mb-4'>
                <Form.Group controlId='bare_lease'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {'Возможна аренда без еды\u00a0'}<span className='text-danger'>*</span>
                    </Form.Label>
                    <div className={styles.radio__item}>
                        <Form.Check
                            type='radio'
                            name='bare_lease'
                            value={1}
                            checked={area.bare_lease}
                            onChange={(e) => setArea({ ...area, ['bare_lease']: true })}
                        /> Да
                    </div>
                    <div className={styles.radio__item}>
                        <Form.Check
                            type='radio'
                            value={0}
                            checked={!area.bare_lease}
                            onChange={(e) => setArea({ ...area, ['bare_lease']: false })}
                        /> Нет
                    </div>
                </Form.Group>
            </Row>
            {/* Недоступные даты */}
            <Row>
                <Form.Group controlId='reserved_dates'>
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        Отметьте даты, на которые бронь зала уже недоступна
                    </Form.Label>
                    <AreaFormDatePicker datesArray={area.reserved_dates} handleDateChange={handleDateChange} />
                </Form.Group>
            </Row>
            {/* Детали */}
            <DetailsTextarea
                details={area.detail_location}
                handleChange={handleChange}
                name='detail_location'
                header='Детали'
                placeholder='Например, опишите минимальную стоимость банкета/аренды зала в пятницу и субботу'
                required
            />
        </>
    )
}

export default AreaForm;