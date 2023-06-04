import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '@/styles/catalog/Catalog.module.scss';
import * as filters from './BotomFiltersArrays';

function BotomFilters() {
  function renderColumn(
    title: string,
    array: { path: string; desc: string; quantity: number }[]
  ): JSX.Element {
    return (
      <ul className={styles.catalog__btmfilters}>
        <h5 className={styles.catalog__btmfilters_header}>{title}</h5>
        {array.map(({ path, desc, quantity }, i) => (
          <li key={i}>
            <Link href={`?${path}`} className={styles.catalog__btmfilters_link}>
              <p>{desc}</p>
              <p>{quantity}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function renderLastColumn(
    array: { path: string; desc: string; quantity: number }[]
  ): JSX.Element {
    return (
      <ul className={styles.catalog__btmfilters}>
        {array.map(({ path, desc, quantity }, i) => (
          <li key={i}>
            <Link href={`?${path}`} className={styles.catalog__btmfilters_link}>
              <h5 className={styles.catalog__btmfilters_header}>{desc}</h5>
              <p>{quantity}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.catalog__btmfilters_container}>
      <Row className={styles.catalog__btmfilters_row + ' gap-5'}>
        <Col>{renderColumn('Банкетные залы', filters.BQHALL)}</Col>
        <Col>{renderColumn('Шатры', filters.TENT)}</Col>
        <Col>{renderColumn('Лофты', filters.LOFT)}</Col>
        <Col>{renderColumn('Отели', filters.HOTEL)}</Col>
      </Row>
      <Row>
        <Col>{renderColumn('Рестораны', filters.RESTAURANT)}</Col>
        <Col>{renderColumn('Кафе', filters.CAFE)}</Col>
        <Col>{renderColumn('Коттеджи', filters.COTTEDGE)}</Col>
        <Col>{renderLastColumn(filters.MISC)}</Col>
      </Row>
    </div>
  );
}

export default BotomFilters;
