import { useEffect, useState, MouseEvent, useRef } from "react";
import Image from 'next/image';
import { Nav } from "react-bootstrap";
import useOutsideClick from '@/hooks/useOutsideClick';
import { CITY_URL, SUG_URL, TOKEN } from "@/constant";
import { DaDataValue, DaDataValues, Nullable } from "@/types/dadata";
import styles from '@/styles/header/City.module.scss';


function City(): JSX.Element {
  const [city, setCity] = useState<string>('Москва');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<DaDataValue[] | undefined>();
  const [error, setError] = useState<string>('');

  const dropDownRef = useRef(null);
  const [openDropDown, setOpenDropdown] = useState<boolean>(false);

  let apiToken = (process.env.NODE_ENV === 'production'? process.env.NEXT_PUBLIC_DADATA : TOKEN);
  
  // определение геолокации юзера
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }
    geo.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    })
  }, []);

  // определение города по геолокации юзера
  useEffect(() => {
    async function fetchCity() {
      let data = { "lat": lat, "lon": lng };
      let response = await fetch(CITY_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
      })
      let result = await response.json();
      setCity(result?.suggestions[0]?.data?.city);
    }
    fetchCity();
  }, [lat, lng])

  // запрос версий адреса по введенной строке
  useEffect(() => {
    async function fetchAdress(query: string) {
      let data = { "query": query };
      let response = await fetch(SUG_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + apiToken
        },
        body: JSON.stringify(data),
      })
      let result: DaDataValues = await response.json();
      setSuggestions(result.suggestions);
    }
    fetchAdress(address);
  }, [address])

  //кастомный хук для закрытия дропдауна по клику в другом месте
  useOutsideClick(dropDownRef, handleOutsideClick, openDropDown);

  function handleClick(e: MouseEvent<HTMLParagraphElement>, city: Nullable<string>) {
    let input = e.target as HTMLElement;
    let chosenAddress: string = input.innerText;
    setAddress(chosenAddress);
    if (city) {
      setCity(city);
    }
    setOpenDropdown(false);
  }

  function handleOutsideClick(e: MouseEvent<HTMLParagraphElement>) {
    setOpenDropdown(false);
    setSuggestions(undefined);
  }

  function renderClues(suggestions: DaDataValue[]) {
    return suggestions.map((suggestion, i) => (
      <p key={i} className={styles.checked} onClick={(e) => handleClick(e, suggestion.data.city)}> {suggestion.data.city} </ p>
    ))
  }

  return (
    <Nav.Item className={styles.city__form_container}>
      <label className={styles.city__form}>
        <Image className={styles.city__image} src='/img/header/pin.svg' width={18} height={21} alt="pin" />
        <input
          className={styles.city__input}
          type='text'
          placeholder={city}
          value={address}
          onChange={e => {
            setAddress(e.target.value);
            setOpenDropdown(true);
          }}
        />
      </label>
      {openDropDown && suggestions &&
        <div ref={dropDownRef} className={styles.city__dropdown}>
          {renderClues(suggestions)}
        </div>
      }
    </Nav.Item>
  )
}

export default City;