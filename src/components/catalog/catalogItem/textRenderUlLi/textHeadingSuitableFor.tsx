import { cards } from "@/mocks/cards";
import { FC } from "react"
import { Col, Row } from "react-bootstrap"


export const TextHeadingSuitableFor:FC = () => {
  const { festivEvents } = cards || {};

  return (
    <Row className='mb-xl-5 mb-md-4 mb-sm-3'>
      <h4>Подходит для:</h4>
      <Row xs={1} sm={2} md={3}>
          {festivEvents?.map((item, i) => (    
            <Col key={i} className='mb-1'>
              <i className= {`${item?.icon} me-2`}/>
              {item?.action}
            </Col>
          ))
          }
      </Row>
    </Row>
  )}