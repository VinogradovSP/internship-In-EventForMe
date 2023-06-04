import { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '@/styles/catalog/Catalog.module.scss';

type DropdownCBProps = {
  name: string;
  text: string;
  options: string[][];
  icon: string;
  className: string;
  setFilterParams: (name: string, value: string[]) => void;
};

const DropdownCB = ({
  name,
  text,
  options,
  icon,
  className,
  setFilterParams,
}: DropdownCBProps) => {
  const initialState: string[] = [];
  const [selectedArray, setSelectedArray] = useState(initialState);

  const iconEl = icon ? (
    <i className={`${icon} fs-lg opacity-60 me-1`}></i>
  ) : (
    ''
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSelectedArray([...selectedArray, e.target.value]);
    } else {
      let i = selectedArray.indexOf(e.target.value);
      if (i >= 0) {
        let copyArray = [...selectedArray];
        copyArray.splice(i, 1);
        setSelectedArray(copyArray);
      }
    }
  }

  useEffect(() => {
    setFilterParams(name, selectedArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, selectedArray]);

  function renderCB() {
    return options.map((option, i) => (
      <Form.Check
        key={i}
        type="checkbox"
        value={option[0]}
        label={option[1]}
        onChange={handleChange}
      />
    ));
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        className={styles.catalog__dropdown_icon + ' ' + className}
      >
        {iconEl}
        <p className={styles.catalog__dropdown_text}>{text}</p>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.catalog__dropdown_container}>
        {renderCB()}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownCB;
