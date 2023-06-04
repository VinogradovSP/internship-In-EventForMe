import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/main/Main.module.scss';
import RegisterBtn from '@/components/main/registerBtn/registerBtn';

function SupplierCard() {
  return (
    <section className={styles.py64 + ' bg-secondary'}>
      <Container as="section" className="mx-auto w-75">
        <Row className="align-items-center">
          <Col
            ms={12}
            lg={6}
            className="text-lg-start text-center mb-4 mb-lg-0"
          >
            <h2 className={styles.supplierFZ}>Стань нашим исполнителем</h2>
            <p className="pb-3 fs-lg">
              Длинная подпись предоставляемой услуги на несколько небольших
              строчек
            </p>
            <RegisterBtn />
          </Col>
          <Col ms={12} lg={6}>
            <div className="d-flex justify-content-center justify-content-lg-end mb-md-0 mb-4">
              <Image
                src="/img/photo.jpg"
                width={416}
                height={400}
                alt="Photo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SupplierCard;
