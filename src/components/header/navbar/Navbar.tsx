import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CatalogDropDown from '../catalogDropDown/CatalogDropDown';
import City from '../city/city';
import RegButton from '../regButton/regButton';
import Login from '../login/Login';
import Avatar from '../avatar/Avatar';
import styles from '@/styles/header/Navbar.module.scss';
import { Paths } from '@/constant';

type HeaderNavbarProps = {
  isAuth: boolean;
};

function HeaderNavbar({ isAuth }: HeaderNavbarProps) {
  const user = useSelector(selectUser);

  const navigation = [
    {
      id: 1,
      path: '#',
      text: 'Свадебные\u00A0сайты',
    },
    {
      id: 2,
      path: '#',
      text: 'Хештеги',
    },
    {
      id: 3,
      path: '#',
      text: 'Приглашения',
    },
    {
      id: 4,
      path: '#',
      text: 'Блог',
    },
  ];

  function renderNavigation() {
    return navigation.map(({ id, path, text }) => (
      <Nav.Item key={id} className={styles.navbar__item}>
        <Nav.Link as={Link} href={path}>
          {text}
        </Nav.Link>
      </Nav.Item>
    ));
  }

  return (
    <Navbar bg="light" expand="xl" className="px-5 px-xl-0 ">
      <Container>
        <Navbar.Brand as={Link} href={Paths.Home} className="me-2 me-xl-4">
          <Image
            className={styles.logo}
            src="/img/header/logo.png"
            width={143}
            height={33}
            alt="EventForME"
          />
        </Navbar.Brand>

        {/* Меню для мобильных устройств */}
        <Navbar.Toggle aria-controls="light-navbar-nav" className="ms-auto" />

        <Navbar.Collapse id="light-navbar-nav" className="order-lg-2">
          <Nav className={styles.navbar__central_block}>
            <City />
            <CatalogDropDown />
            {renderNavigation()}
          </Nav>
          <Nav>
            {!isAuth && <Login />}
            {!isAuth && <RegButton />}

            {/* {isAuth && <Search />} */}
            {isAuth && (
              <Avatar
                is_bride={user?.is_bride}
                name={user?.name}
                surname={user?.surname}
                avatar={user?.avatar}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
