import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/catalog/Catalog.module.scss';
import { useRouter } from 'next/router';

function Sidebar() {
  let path = useRouter().pathname;
  let inCatalog = /^\/catalog\//.test(path);

  let id = 0;
  const list = [
    { id: id, name: 'Площадки', path: 'places', items_quantity: 500 },
    { id: ++id, name: 'Фотографы', path: 'photo', items_quantity: 440 },
    {
      id: ++id,
      name: 'Музыкальные группы',
      path: 'music',
      items_quantity: 770,
    },
    {
      id: ++id,
      name: 'Свадебные платья',
      path: 'dresses',
      items_quantity: 100,
    },
    { id: ++id, name: 'Мужские костюмы', path: 'dresses', items_quantity: 100 },
    {
      id: ++id,
      name: 'Обручальные кольца',
      path: 'dresses',
      items_quantity: 100,
    },
    {
      id: ++id,
      name: 'Платья подружек невесты',
      path: 'dresses',
      items_quantity: 100,
    },
    { id: ++id, name: 'Стилисты', path: '#', items_quantity: 770 },
    { id: ++id, name: 'Визажисты', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Оформление и декор', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Приглашения', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Флористика и букеты', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Видеографы', path: '#', items_quantity: 440 },
    { id: ++id, name: 'Хореографы', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Диджеи', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Ведущие', path: '#', items_quantity: 500 },
    { id: ++id, name: 'Организаторы', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Детские аниматоры', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Шоу-программа', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Свет и звук', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Кейтеринг', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Торты и десерты', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Красота и здоровье', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Транспорт', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Бармены', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Фейерверки', path: '#', items_quantity: 48 },
    { id: ++id, name: 'Дворец бракосочетания', path: '#', items_quantity: 48 },
  ];

  function renderCategoriesList() {
    return list.map((category) => (
      <Link
        key={category.id}
        href={inCatalog ? category.path : 'catalog/' + category.path}
        className={styles.sidebar__link}
      >
        <p
          className={
            path.split('/')[2] === category.path ? styles.active : undefined
          }
        >
          {category.name}
        </p>
        <p
          className={
            path.split('/')[2] === category.path ? styles.active : undefined
          }
        >
          {category.items_quantity}
        </p>
      </Link>
    ));
  }

  return (
    <>
      <Col
        as="aside"
        lg={4}
        xl={4}
        className="border-top-lg border-end-lg shadow-sm p-4 rounded mb-lg-0 mb-5"
      >
        <h3>Категории</h3>
        {renderCategoriesList()}
      </Col>
    </>
  );
}

export default Sidebar;
