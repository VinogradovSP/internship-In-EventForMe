import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap"
import styles from '@/styles/addProperty/AddProperty.module.scss';

const location = [
  { value: 'Около моря', checked: false },
  { value: 'В городе', checked: true },
  { value: 'Около озера', checked: false },
  { value: 'Около реки', checked: false },
  { value: 'В центре города', checked: false },
  { value: 'В горах', checked: false },
  { value: 'За городом', checked: false },
  { value: 'В лесу', checked: false },
]

const kitchen = [
  { value: 'Европейская', checked: false },
  { value: 'Итальянская', checked: false },
  { value: 'Азиатская', checked: true },
  { value: 'Японская', checked: false },
  { value: 'Русская', checked: true },
  { value: 'Корейская', checked: false },
  { value: 'Кавказская', checked: false },
  { value: 'Другая', checked: false },
]

const suitableFor = [
  { value: 'Свадьба', checked: false },
  { value: 'Фуршет', checked: false },
  { value: 'Корпоратив', checked: false },
  { value: 'День рождения', checked: true },
  { value: 'Мальчишник', checked: false },
  { value: 'Праздничный банкет', checked: false },
  { value: 'Новый год', checked: true },
  { value: 'Девичник', checked: false },
  { value: 'Выпускной', checked: false },
]

export const AddPropertyDescriptionPlace = () => (

<section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
  <h2 className='h4 mb-4'>
    <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
    Описание площадки
  </h2>
  <Form.Group className='mb-2'>
    <Form.Label className='d-block fw-bold mb-2 pb-1'>Расположение*</Form.Label>
    <Row xs={1} sm={2} md={3}>
      {location.map((item, indx) => (
        <Col key={indx}>
          <Form.Check
            type='checkbox'
            id={`location-${indx}`}
            value={item.value}
            label={item.value}
            defaultChecked={item.checked}
          />
        </Col>
      ))}
    </Row>
    <p className="mt-2 fs-sm">
      <i className='fi-alert-circle me-2'/>
      Не более 4-х функций.
    </p>
  </Form.Group>

  <Form.Label className='d-block fw-bold mb-2 pb-1'>Кухня*</Form.Label>
  <Form.Group className='mb-4 d-flex flex-wrap'>
    <Col xs={12} sm={4} md={8} className='mb-3'>
      <Row xs={1} sm={1} md={2}>
        {kitchen.map((item, indx) => (
          <Col key={indx}>
            <Form.Check
              type='checkbox'
              id={`kitchen-${indx}`}
              value={item.value}
              label={item.value}
              defaultChecked={item.checked}
              />
          </Col>
        ))}
      </Row>
      <p className="mt-2 mb-0 fs-sm">
        <i className='fi-alert-circle me-2'/>
        Не более 3-х функций.
      </p>
    </Col>
    <Col xs={12} sm={5} md={4}>
      <Row xs={1} className="ms-2" >
        <Form.Label className='d-block fw-bold mb-3 p-0'>Есть детское меню?</Form.Label>
        <Form.Check type='radio' id='radio-1' name='radio' label='Да' defaultChecked />
        <Form.Check type='radio' id='radio-2' name='radio' label='Нет' />
      </Row>
    </Col>
  </Form.Group>

  <Form.Label className="form-label fw-bold mb-2 p-0">Время работы*</Form.Label>
  <Form.Group className='mb-4 d-flex justify-content-between align-items-center col-md-6 col-sm-8'>
    <FormControl type='time' defaultValue='10:00' aria-describedby='addon1' />
    <div className='text-muted mx-4 fs-lg'>—</div>
    <FormControl type='time' defaultValue='23:00' aria-describedby='addon2' />
  </Form.Group>

  <Form.Group className={styles.firework}>
    <Row xs={1} className="ms-1">
      <Form.Label className='d-block fw-bold mb-3 p-0'>Разрешено запускать фейерверки?*</Form.Label>
      <Form.Check type='radio' id='radio-3' name='firework' label='Да' defaultChecked />
      <Form.Check type='radio' id='radio-4' name='firework' label='Нет' />
    </Row>
    <Row xs={1} className="ms-1">
      <Form.Label className='d-block fw-bold mb-3 p-0'>Разрешено приносить свой алкоголь?*</Form.Label>
      <Form.Check type='radio' id='radio-5' name='alcohol' label='Да' />
      <Form.Check type='radio' id='radio-6' name='alcohol' label='Нет' defaultChecked />
    </Row>
  </Form.Group>
  
  <Row  className={styles.firework}>
    <div className={styles.price}>
      <InputGroup className="mb-3">
        <h6 className="fw-bold mb-3 p-0 w-100">Пробковый сбор*</h6>
        <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border} />
        <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
      </InputGroup>
      <Form.Check type='checkbox' id='stopper' label='Пробкового сбора нет' />
    </div>
    
    <div className={styles.price}>
      <InputGroup className="mb-3">
        <h6 className="fw-bold mb-3 p-0 w-100">Продление аренды*</h6>
        <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border}/>
        <InputGroup.Text className="border-start-0">₽/час</InputGroup.Text>
      </InputGroup>
      <Form.Check type='checkbox' id='rent' label='Нельзя продлить' />
    </div>
    <div className={styles.price}>
      <InputGroup >
        <h6 className="fw-bold mb-3 p-0 w-100">Средний чек*</h6>
        <FormControl type='number' placeholder='250' aria-label='Amount' className={styles.price_border}/>
        <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
      </InputGroup>
    </div>
    
  </Row>

  <Form.Group className='mb-2'>
    <Form.Label className='d-block fw-bold mb-2 pb-1'>Подходит для:*</Form.Label>
    <Row xs={1} sm={2} md={3}>
      {suitableFor.map((item, indx) => (
        <Col key={indx}>
          <Form.Check
            type='checkbox'
            id={`suitableFor-${indx}`}
            value={item.value}
            label={item.value}
            defaultChecked={item.checked}
          />
        </Col>
      ))}
    </Row>
  </Form.Group>
</section>
)

