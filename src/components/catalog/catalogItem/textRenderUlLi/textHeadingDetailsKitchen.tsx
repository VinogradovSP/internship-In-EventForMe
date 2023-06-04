import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import styles from "@/styles/catalog/places/Places.module.scss";

export const TextHeadingDetailsKitchen: FC = () => (

  <div id="details" className={styles.text__cuisine_container + ' border-0 mb-xl-5 mb-md-4 mb-sm-3 d-flex'}>
    <Card.Body className='p-0'>
      <Card.Title as='h4' className='mb-3'>Детали о кухне площадки:</Card.Title>
      <Card.Text className='mb-2'>
        <i className='fi-union me-2 fs-sm' />
        Европейская, русская, кавказская кухня
      </Card.Text>
      <Card.Text className='mb-2'>
        <i className='fi-ticket me-2 fs-sm' />
        Есть детское меню
      </Card.Text>
    </Card.Body>
    <Button href="#" className={styles.text__cuisine_btn}>
      <i className='fi-file-clean me-2' />
      Запросить банкетное меню
    </Button>
  </div>
)
