import {
  ChangeEvent,
  MouseEvent,
  ClipboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { DaDataValue } from '@/types/dadata';
import { fetchAddress } from './locationAPI';
import { ADD_PLACE_NAMES } from '@/constant';
import useOutsideClick from '@/hooks/useOutsideClick';
import styles from '@/styles/addProperty/AddProperty.module.scss';

type LocationFormProps = {
  setCity: (data: string) => void;
  setAddress: (data: string) => void;
  setGeodata: (lat: number, lon: number) => void;
  setInputFields: (e: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  metro?: string;
  id_yandex?: string;
};

function LocationForm({
  setCity,
  setAddress,
  setGeodata,
  setInputFields,
  address,
  metro,
  id_yandex,
}: LocationFormProps) {
  const dropDownRef = useRef(null);
  const [openDropDown, setOpenDropdown] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
  const [preliminaryAddress, setPreliminaryAddress] = useState<string>('');

  useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);

  useEffect(() => {
    fetchAddress(address, setSuggestions, setGeodata);
  }, [address]);

  //автоматическое определение города
  useEffect(() => {
    if (suggestions && suggestions.length !== 0 && suggestions[0].data.city) {
      setCity(suggestions[0].data.city);
    }
  }, [suggestions]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const prevValue = preliminaryAddress;
    const value = e.target.value;
    const changedValue = value.slice(prevValue.length - 1);
    setPreliminaryAddress(value);
    if (
      (changedValue.length === 2 && changedValue[0] === ' ') ||
      changedValue[0] === ',' ||
      changedValue[0] === '.'
    ) {
      setAddress(value);
      setOpenDropdown(true);
    }
    if (changedValue[0] && changedValue[0].match(/[А-ЯЁ]/g)) {
      setAddress(value);
      setOpenDropdown(true);
    } else if (changedValue.length === 1) {
      setAddress(value);
      setOpenDropdown(true);
    }
  }

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    const clipboardData = e.clipboardData;
    const pastedData = clipboardData.getData('Text');
    setAddress(pastedData);
    setOpenDropdown(true);
  }

  function handleClick(e: MouseEvent<HTMLParagraphElement>) {
    let input = e.target as HTMLElement;
    let chosenAddress: string = input.innerText;
    setPreliminaryAddress(chosenAddress);
    setAddress(chosenAddress);
    setOpenDropdown(false);
  }

  function handleOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
    setOpenDropdown(false);
    setSuggestions(undefined);
  }

  function renderClues(suggestions: DaDataValue[]) {
    return suggestions.map((suggestion, i) => (
      <p key={i} className={styles.checked} onClick={(e) => handleClick(e)}>
        {suggestion.value}
      </p>
    ));
  }

  return (
    <section
      id={ADD_PLACE_NAMES.location.id}
      className="card card-body border-0 shadow-sm p-4 mb-4"
    >
      <h2 className="h4 mb-4">
        <i className="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.location.name}
      </h2>
      <Row>
        <Form.Group as={Col} sm={12} controlId="ap-address" className="mb-3">
          <Form.Label className="d-block fw-bold mb-2 mt-2 pb-1">
            Адрес <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            value={preliminaryAddress}
            name="address"
            onFocus={() => {
              setOpenDropdown(true);
            }}
            onChange={handleChange}
            onPaste={handlePaste}
            placeholder="Введите адрес"
            title="При вводе адреса вы можете воспользоваться автоматическими подсказками. Выбрать подсказку можно, кликнув на нее."
            required
          />
          {openDropDown && suggestions ? (
            <div ref={dropDownRef} className={styles.address__dropdown}>
              {renderClues(suggestions)}
            </div>
          ) : null}
        </Form.Group>
        <Form.Group as={Col} sm={12} controlId="ap-metro" className="mb-3">
          <Form.Label>Метро</Form.Label>
          <Form.Control
            name="metro"
            placeholder="Укажите ближайшие станции метро"
            value={metro}
            onChange={setInputFields}
          />
        </Form.Group>
        <Form.Group as={Col} sm={12} controlId="ap-yaid" className="mb-3">
          <Form.Label>ID организации в Яндекс.Бизнес </Form.Label>
          <Form.Control
            name="id_yandex"
            placeholder="Введите id организации"
            title="Заполнение этого поля необходимо для отображения отзывов Яндекс"
            value={id_yandex}
            onChange={setInputFields}
          />
        </Form.Group>
      </Row>
    </section>
  );
}

export default LocationForm;
