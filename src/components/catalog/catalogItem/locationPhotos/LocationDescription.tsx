import Link from 'next/link';
import { Card } from 'react-bootstrap/';
import styles from '@/styles/catalog/places/LocationPhotos.module.scss';
import { Place, PlaceReceived } from '@/types/placeType';
import { numberOfAreas } from '@/services/parse.service';

type LocationDescriptionProps = {
  item: PlaceReceived | Place;
};

function LocationDescription({ item }: LocationDescriptionProps) {
  return (
    <>
      <div className={styles.location__flex_container}>
        <h3>{item.title}</h3>
        {item.areas && (
          <Card.Footer className={styles.text_title}>
            <span>
              {item.areas.length} {numberOfAreas(item.areas.length)}
            </span>
          </Card.Footer>
        )}
      </div>

      <div className={styles.location__flex_container}>
        <p>{item.address}</p>
        <Link href="#map" className={styles.location__map}>
          <i className="fi-map" /> <p>На карте</p>
        </Link>
      </div>
      <p>Метро: {item.metro || 'не указано'}</p>
    </>
  );
}

export default LocationDescription;
