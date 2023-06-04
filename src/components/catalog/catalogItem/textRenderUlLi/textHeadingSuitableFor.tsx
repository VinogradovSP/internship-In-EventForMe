import { FC } from "react"
import { Row } from "react-bootstrap"


export const TextHeadingSuitableFor:FC = () => (

<Row className='mb-xl-5 mb-md-4 mb-sm-3'>
  <h4>Подходит для:</h4>
    <Row className='d-flex justify-content-between'>
      <ul className='list-unstyled w-auto'>
        <li><i className='fi-friends me-2 fs-sm'/>Свадьба</li>
        <li><i className='fi-gift me-2 fs-sm'/>День рождения</li>
        <li><i className='fi-bell me-2 fs-sm'/>Новый год</li>
      </ul>
      <ul className='list-unstyled w-auto'>
        <li><i className='fi-glass me-2 fs-sm'/>Фуршет</li>
        <li><i className='fi-man me-2 fs-sm'/>Мальчишник</li>
        <li><i className='fi-woman me-2 fs-sm'/>Девичник</li>
      </ul>
      <ul className='list-unstyled w-auto'>
        <li><i className='fi-party-popper me-2 fs-sm'/>Выпускной</li>
        <li><i className='fi-briefcase me-2 fs-sm'/>Корпоратив</li>
        <li><i className='fi-cake me-2 fs-sm'/>Праздничный банкет</li>
      </ul>
  </Row>
</Row>
)
