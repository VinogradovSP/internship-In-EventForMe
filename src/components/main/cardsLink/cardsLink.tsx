import { cards } from "@/mocks/cards";
import { FC } from "react";
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "./card";

export const CardsLink:FC = () => {
const {cardsLinkArrey} = cards || {};

if (!cardsLinkArrey) {
  
}

  return(
  <section>
    <Container style={{marginTop: "104px"}}>
      <Row> 
        <Col sm={12} className='text-center'>
          <p className='mb-3'>Портал EventForMe</p>
          <h1 className='mb-5'>Сайт, в котором есть всё необходимое<br />для планирования свадьбы </h1>
        </Col>
      </Row>
      <Row>
        {cardsLinkArrey && cardsLinkArrey.map(item =>
          ( <Card 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            pathImg={item.pathImg}
            />          
          )
        )}
      </Row>
    </Container>
  </section>
)}