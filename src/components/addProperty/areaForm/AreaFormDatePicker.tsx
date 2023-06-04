import { MouseEvent, useState } from 'react';
import { Alert, Form, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type AreaFormDatePickerProps = {
  datesArray: Date[];
  handleDateChange: (date: Date, id: number) => void;
};

function AreaFormDatePicker({
  datesArray,
  handleDateChange,
}: AreaFormDatePickerProps) {
  const [indexArray, setIndexArray] = useState<number[]>([0]);

  function handleClick(e: MouseEvent<HTMLParagraphElement>) {
    e.preventDefault;
    let last = indexArray[indexArray.length - 1];
    setIndexArray([...indexArray, ++last]);
  }

  function renderDateForm(index: number) {
    return (
      <div key={index}>
        <Form.Group controlId="date-input" className="mb-3">
          <InputGroup>
            <Form.Control
              as={DatePicker}
              selected={datesArray[index]}
              placeholderText="Выберите недоступную дату"
              className="rounded pe-5"
              dateFormat="dd/MM/yy"
              excludeDates={datesArray}
              onChange={(e: any) => {
                handleDateChange(e, index);
              }}
            />
            <i className="fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i>
          </InputGroup>
        </Form.Group>
        <p className="cursor-pointer text-primary mb-3" onClick={handleClick}>
          <i className="fi-plus-circle me-3"></i> Добавить дату
        </p>
      </div>
    );
  }

  return (
    <>
      {indexArray.map((index) => renderDateForm(index))}
      <Alert variant="info" className="d-flex">
        <i className="fi-alert-circle me-2 me-sm-3 lead"></i>
        <div>
          Редактировать и менять забронированные даты в календаре можно в любое
          время.
        </div>
      </Alert>
    </>
  );
}

export default AreaFormDatePicker;
