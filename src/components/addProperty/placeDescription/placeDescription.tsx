import { ChangeEvent } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import RenderCheckbox from '../renderChekbox/RenderCheckBox';
import { LOCATION, KITCHEN, EVENT, ADD_PLACE_NAMES } from '@/constant';
import styles from '@/styles/addproperty/AddProperty.module.scss';

type PlaceDescriptionProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckBox: (name: string, array: number[]) => void;
  handleNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRadio: (e: ChangeEvent<HTMLInputElement>) => void;
  children_kitchen: boolean;
  fireworks: boolean;
  alco: boolean;
};

function PlaceDescription({
  handleChange,
  handleCheckBox,
  handleNumberChange,
  handleRadio,
  children_kitchen,
  fireworks,
  alco,
}: PlaceDescriptionProps) {
  return (
    <section
      id={ADD_PLACE_NAMES.description.id}
      className="card card-body border-0 shadow-sm p-4 mb-4"
    >
      <h2 className="h4 mb-4">
        <i className="fi-edit text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.description.name}
      </h2>

      {/* Расположение */}
      <Row className="mb-4">
        <Form.Group controlId="location">
          <Form.Label className="d-block fw-bold mb-2 pb-1">
            Расположение <span className="text-danger">*</span>
          </Form.Label>
          <RenderCheckbox
            options={LOCATION}
            name="location"
            max={4}
            handleCheckBox={handleCheckBox}
          />
          <p className="mt-2 mb-0 fs-sm">
            <i className="fi-alert-circle me-2" />
            Не более 4-х опций.
          </p>
        </Form.Group>
      </Row>

      {/* Кухня */}
      <Row className="mb-4">
        <Form.Group controlId="kitchen">
          <Form.Label className="d-block fw-bold mb-2 pb-1">
            Кухня <span className="text-danger">*</span>
          </Form.Label>
          <RenderCheckbox
            options={KITCHEN}
            name="kitchen"
            max={3}
            handleCheckBox={handleCheckBox}
          />
          <p className="mt-2 fs-sm">
            <i className="fi-alert-circle me-2" />
            Не более 3-х опций.
          </p>
        </Form.Group>
        <Row>
          <Form.Group controlId="children_kitchen" as={Col}>
            <Form.Label className="d-block fw-bold mb-3 p-0">
              Есть детское меню?
            </Form.Label>
            <Form.Check
              type="radio"
              name="children_kitchen"
              id="children_kitchen-Да"
              label="Да"
              value={1}
              checked={children_kitchen}
              onChange={handleRadio}
            />
            <Form.Check
              type='radio'
              name='children_kitchen'
              label='Нет'
              value={0}
              checked={!children_kitchen}
              onChange={handleRadio}
            />
          </Form.Group>
        </Row>
      </Row>

      {/* Время работы */}
      <Row className="mb-4">
        <Form.Group controlId="time">
          <Form.Label className="form-label fw-bold mb-2 p-0">
            Время работы <span className="text-danger">*</span>
          </Form.Label>
          <div className="d-flex justify-content-between align-items-center col-md-6 col-sm-8">
            <FormControl
              type="time"
              name="start_time"
              onChange={handleChange}
              required
            />
            <div className="text-muted mx-4 fs-lg">—</div>
            <FormControl
              type="time"
              name="finish_time"
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
      </Row>

      {/* Алкоголь, фейерверки */}
      <Row className="mb-4">
        <Form.Group as={Col} controlId="fireworks">
          <Form.Label className="d-block fw-bold mb-3 p-0">
            Разрешено запускать фейерверки?{' '}
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Check
            type="radio"
            name="fireworks"
            id="fireworks-Да"
            label="Да"
            value={1}
            checked={fireworks}
            onChange={handleRadio}
          />
          <Form.Check
            type="radio"
            name="fireworks"
            id="fireworks-Нет"
            label="Нет"
            value={undefined}
            checked={!fireworks}
            onChange={handleRadio}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="alco">
          <Form.Label className="d-block fw-bold mb-3 p-0">
            Разрешено приносить свой алкоголь?{' '}
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Check
            type="radio"
            name="alco"
            label="Да"
            id="alco-Да"
            value={1}
            checked={alco}
            onChange={handleRadio}
          />
          <Form.Check
            type="radio"
            name="alco"
            label="Нет"
            id="alco-Нет"
            value={undefined}
            checked={!alco}
            onChange={handleRadio}
          />
        </Form.Group>
      </Row>

      {/* Пробковый сбор, аренда, чек */}
      <Row className={`${styles.numbers_input__row} mb-4`}>
        <Form.Group
          controlId="payment_of_alco"
          className={styles.numbers_input__col}
        >
          <Form.Label className="d-block fw-bold mb-3 p-0">
            Пробковый сбор
          </Form.Label>
          <InputGroup>
            <FormControl
              type="number"
              name="payment_of_alco"
              placeholder="250"
              className={styles.price_border}
              onChange={handleNumberChange}
            />
            <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group
          controlId="lease_extension"
          className={styles.numbers_input__col}
        >
          <Form.Label className="d-block fw-bold mb-3 p-0">
            Продление аренды
          </Form.Label>
          <InputGroup>
            <FormControl
              type="number"
              name="lease_extension_price"
              placeholder="250"
              className={styles.price_border}
              onChange={handleNumberChange}
            />
            <InputGroup.Text className="border-start-0">₽/час</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group
          controlId="average_check"
          className={styles.numbers_input__col}
        >
          <Form.Label className="d-block fw-bold mb-3 p-0">
            Средний чек <span className="text-danger">*</span>
          </Form.Label>
          <InputGroup>
            <FormControl
              type="number"
              name="average_check"
              placeholder="250"
              className={styles.price_border}
              onChange={handleNumberChange}
              required
            />
            <InputGroup.Text className="border-start-0">₽/чел</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      {/* Подходит для: */}
      <Form.Group controlId="event" className="mb-2">
        <Form.Label className="d-block fw-bold mb-2 pb-1">
          Подходит для: <span className="text-danger">*</span>
        </Form.Label>
        <RenderCheckbox
          options={EVENT}
          name="event"
          max={100}
          handleCheckBox={handleCheckBox}
        />
      </Form.Group>
    </section>
  );
}

export default PlaceDescription;
