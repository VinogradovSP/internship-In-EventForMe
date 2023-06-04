import Sidebar from "@/components/catalog/sidebar/Sidebar";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import { Paths } from "@/constant";

export default function Catalog() {

  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href={Paths.Home}>Главная</Breadcrumb.Item>
        <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Sidebar />
        <Col>
          <h2>Корневая страница каталога</h2>
        </Col>
      </Row>

    </Container>
  )
}