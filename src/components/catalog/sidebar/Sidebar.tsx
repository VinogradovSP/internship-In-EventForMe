import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/catalog/Catalog.module.scss';


function Sidebar() {
    const list = [
        { id: 1, name: "Свадебные платья", path: 'dresses', items_quantity: 100 },
        { id: 2, name: "Площадки", path: 'places', items_quantity: 500 },
        { id: 3, name: "Ведущие", path: 'host', items_quantity: 500 },
        { id: 4, name: "Фотографы", path: 'photo', items_quantity: 440 },
        { id: 5, name: "Видеографы", path: 'video', items_quantity: 440 },
        { id: 6, name: "Музыканты", path: 'music', items_quantity: 770 },
        { id: 7, name: "Стилисты", path: 'style', items_quantity: 770 },
    ]

    function renderCategoriesList() {
        return list.map((category) => (
            <Link key={category.id}
                href={{
                    pathname: `${category.path}`,
                    // query: { category: category.path },
                }}
                className={styles.sidebar__link}
            >
                <p>{category.name}</p><p>{category.items_quantity}</p>
            </Link>
        ))
    }

    return (
        <>
            <Col
                as='aside'
                lg={3}
                xl={3}
                className='border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2 rounded'
            >
                <h3>Категории</h3>
                {renderCategoriesList()}
            </Col>
        </>
    )
}

export default Sidebar;