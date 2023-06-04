import Sidebar from "@/components/catalog/sidebar/Sidebar";
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export default function Catalog() {

  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <h2>Корневая страница каталога</h2>
      </Row>
      

    </Container>
  )
}