import { Col, Row } from 'react-bootstrap';
import { PlaceReceived } from '@/types/placeType';
import { LOCATION } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';

type TextDescriptionProps = {
  item: PlaceReceived;
};

function TextDescription({ item }: TextDescriptionProps) {
  let locations: (string | number)[] = [];
  item.location.forEach(({ id }) => {
    let res = LOCATION.filter((value) => value[0] === id);
    locations.push(res[0][1]);
  })
  
  function renderLocations() {
    if (locations.length !== 0) {
      return locations.map((location, i)=> (<p key={i} className={styles.text_locations}>{location}</p>))
    }
    return 'Не указано'
  }

  return (
    <Row id="review" className="mb-xl-5 mb-md-4 mb-sm-3 d-flex">
      <h4>Описание:</h4>
      <Col
        className={
          styles.text__description_container + ' d-flex justify-content-between'
        }
      >
        <ul className={styles.text__description_column + ' list-unstyled'}>

          <li className="d-flex align-items-center justify-content-between text-dark">
            Расположение <strong>{renderLocations()}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Время работы <strong>{item?.start_time.substring(0, 5) || 'Не указано'} - {item?.finish_time.substring(0, 5) || 'Не указано'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Средний чек <strong>{item?.average_check || 'Не указано'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Свой алкоголь{' '}
            <strong>{item?.alco ? 'Разрешен' : 'Запрещен'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Пробковый сбор <strong>{item?.payment_of_alco || 'Не указано'}</strong>
          </li>
        </ul>
        <ul className={styles.text__description_column + ' list-unstyled'}>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Продление аренды <strong>{item?.lease_extension ? 'Возможно' : 'Невозможно'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Стоимость продления <strong>{item?.lease_extension_price || 'Не указано'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Вместимость <strong>{item?.capacity || 'Не указано'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Депозит <strong>{item?.deposit || 'Не указано'}</strong>
          </li>
          <li className="d-flex align-items-center justify-content-between text-dark">
            Аренда <strong>{item?.lease || 'Не указано'}</strong>
          </li>
        </ul>
      </Col>
    </Row>
  )
};

export default TextDescription;