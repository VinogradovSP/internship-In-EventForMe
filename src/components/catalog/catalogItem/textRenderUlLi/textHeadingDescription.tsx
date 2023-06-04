import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Place } from "@/types/placeType";
import styles from '@/styles/catalog/places/Places.module.scss';

type PlaceProps = {
  item?: Place,
}

export const TextHeadingDescription:FC<PlaceProps> = ({item}) => (

<Row id="review" className='mb-xl-5 mb-md-4 mb-sm-3 d-flex'>
  <h4>Описание:</h4>
    <Col className={styles.text__description_container + ' d-flex justify-content-between'}>
      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className="d-flex align-items-center justify-content-between text-dark">Вместимость <strong>{item?.capacity || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Расположение <strong>{item?.placement || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Кухня <strong>{item?.cuisine || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Время работы <strong>{item?.hours || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Свой алкоголь <strong>{item?.alcohol ? "Разрешено" : "Запрещено"}</strong></li>
      </ul>
      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className='d-flex align-items-center justify-content-between text-dark'>Аренда <strong>{item?.lease || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Средний чек <strong>{item?.avg_price || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Пробковый сбор <strong>{item?.fee || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Депозит <strong>{item?.deposit || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Продление <strong>{item?.continue || 'Не указано'}</strong></li>
      </ul>
    </Col>
</Row>
)
