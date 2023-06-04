import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { useRouter } from 'next/router';


function CatalogDropDown() {
    let path = useRouter().pathname;
    let inCatalog= (/^\/catalog\//.test(path));

    const catalogItems = [
        {
            id: 1,
            path: 'dresses',
            text: 'Свадебные платья'
        },
        {
            id: 2,
            path: 'places',
            text: 'Площадки'
        },
        {
            id: 3,
            path: 'hosts',
            text: 'Ведущие'
        },
        {
            id: 4,
            path: 'photo',
            text: 'Фотографы'
        },
        {
            id: 5,
            path: 'video',
            text: 'Видеографы'
        },
        {
            id: 6,
            path: 'music',
            text: 'Музыканты'
        },
        {
            id: 7,
            path: 'style',
            text: 'Стилисты'
        },
    ]

    function renderItems() {
        return catalogItems.map(({ id, path, text }) => (
            <Dropdown.Item key={id} as={Link} href={inCatalog? path :'catalog/' + path}>
                {text}
            </Dropdown.Item>
        ))
    }

    return (
        <Nav.Item as={Dropdown}>
            <Dropdown.Toggle as={Nav.Link}>Каталог</Dropdown.Toggle>
            <Dropdown.Menu renderOnMount>
                {renderItems()}
            </Dropdown.Menu>
        </Nav.Item>
    )
}

export default CatalogDropDown;