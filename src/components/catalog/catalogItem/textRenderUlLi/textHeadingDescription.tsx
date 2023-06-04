import { Place } from "@/types/placeType"
import { FC } from "react"
import { Col, Row } from "react-bootstrap"
import styles from '@/styles/catalog/places/Places.module.scss';
import { LOCATION, KITCHEN } from "@/constant";
import { temporaryComponent } from "@/components/addProperty/temporaryComponent";

type PlaceProps = {
  place: Place
}

export const TextHeadingDescription:FC<PlaceProps> = ({ place }) => {
  const { location } = place || [];
  const { kitchen } = place || [];

return (
<Row id="review" className='mb-xl-5 mb-md-4 mb-sm-3 d-flex'>
  <h4>Описание:</h4>
    <Col className={styles.text__description_container + ' d-flex justify-content-between'}>
      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className="d-flex align-items-center justify-content-between text-dark">
          Вместимость 
          <strong>{'' || 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Расположение 
          <strong className="d-flex flex-column text-end">
            {temporaryComponent(location, LOCATION) || 'Не указано'}
          </strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Кухня 
          <strong className="d-flex flex-column text-end">
            {temporaryComponent(kitchen, KITCHEN) || 'Не указано'}
          </strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Время работы 
          <strong>{`c ${place.start_time} до ${place.finish_time}` || 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Свой алкоголь 
          <strong>{place.alco ? "Разрешено" : "Запрещено"}</strong>
        </li>
      </ul>

      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className='d-flex align-items-center justify-content-between text-dark'>
          Аренда 
          <strong>{place.lease_extension ? "Есть" : "Нет"|| 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Средний чек
          <strong>{place.average_check || 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Пробковый сбор 
          <strong>{place.payment_of_alco || 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Депозит 
          <strong>{''|| 'Не указано'}</strong>
        </li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>
          Продление 
          <strong>{place.lease_extension_price || 'Не указано'}</strong>
        </li>
      </ul>
    </Col>
</Row>
)}
