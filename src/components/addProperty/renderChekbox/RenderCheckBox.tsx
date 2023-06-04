import { ChangeEvent, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

type RenderCheckboxProps = {
  options: (string | number)[][];
  name: string;
  max: number;
  handleCheckBox: (name: string, array: number[]) => void;
};

function RenderCheckbox({
  options,
  name,
  max,
  handleCheckBox,
}: RenderCheckboxProps) {
  const initialState: number[] = [];
  const [selectedArray, setSelectedArray] = useState(initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //запрет на выбор опций свыше указанного дял поля максимума
    if (e.target.checked && selectedArray.length === max) {
      e.target.checked = false;
    }
    if (e.target.checked) {
      setSelectedArray([...selectedArray, +e.target.value]);
    } else {
      let i = selectedArray.indexOf(+e.target.value);
      if (i >= 0) {
        let copyArray = [...selectedArray];
        copyArray.splice(i, 1);
        setSelectedArray(copyArray);
      }
    }
  }

  useEffect(() => {
    handleCheckBox(name, selectedArray);
  }, [name, selectedArray]);

  return (
    <Row xs={1} sm={2} md={3}>
      {options.map((option, index) => (
        <Col key={option[0]}>
          <Form.Check
            type="checkbox"
            value={option[0]}
            id={`${option[1]}-${index}`}
            label={option[1]}
            onChange={handleChange}
          />
        </Col>
      ))}
    </Row>
  );
}

export default RenderCheckbox;
