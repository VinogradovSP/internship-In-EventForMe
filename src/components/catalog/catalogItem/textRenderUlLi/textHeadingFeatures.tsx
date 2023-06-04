import { FC } from "react"
import { Row } from "react-bootstrap"


export const TextHeadingFeatures:FC = () => (

<Row className='mb-xl-5 mb-md-4 mb-sm-3'>
  <h4>Особенности</h4>            
  <Row className='d-flex justify-content-between'>
    <ul className='list-unstyled w-auto'>
      <li>Есть танцпол</li>
      <li>Есть сцена</li>
      <li>Welcome-зона</li>
      <li>Своя парковка</li>
    </ul>
    <ul className='list-unstyled w-auto'>
      <li>Номер для новобрачных</li>
      <li>1 официант обслуживает 10 человек</li>
      <li>Панорамный вид</li>
      <li>С выездной регистрацией</li>
    </ul>
    <ul className='list-unstyled w-auto'>
      <li>Фотозона</li>
      <li>Отель для гостей</li>
      <li>Есть примерочная</li>
      <li>Панорамный вид</li>
    </ul>
  </Row>
</Row>
)
