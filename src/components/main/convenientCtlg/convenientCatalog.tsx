import { cards } from "@/mocks/cards";
import { FC } from "react";
import {Button, Container, Row} from "react-bootstrap";
import ImageLoader from '../../_finder/ImageLoader';
import { Navigation, Pagination, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { CardConCat } from "./cardConCat";
import Link from "next/link";

export const ConvenientCatalog:FC = () => {
const {CardsConCat} = cards || {};
const {slidesCatalog} = cards || {};

if (!CardsConCat) {
  
}

  return(
  <section>
    <Container style={{marginTop: "124px"}}>
      <Row> 
        <Row className="col-lg-6 col-sm-12 mb-sm-5">
          {CardsConCat && CardsConCat.map(item =>
            ( <CardConCat
              key={item.id} 
              title={item.title} 
              description={item.description} 
              nameImg={item.nameImg}
              color={item.color}
              />          
            )
          )}
        </Row>
        
        <figure className="border-0 align-items-center col-lg-6 col-md-8 col-sm-10 ms-lg-3">
          <figcaption>
            <h2>Удобный каталог</h2>
            <p className="mt-3 mb-5">Более подробное описание категории: важные фильтры, советы и др. We have the most comprehensive directory of estate agents to help you with all your property needs. Whether buying, selling or renting start your search.</p>
          </figcaption>
          <Swiper
            modules={[Navigation, Pagination, EffectCube]}
            spaceBetween={16}
            navigation
            pagination={{
              el: '#bullets',
              clickable: true
            }}
            effect={"cube"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            grabCursor
            >            
              {slidesCatalog && slidesCatalog.map(slide =>
              (<SwiperSlide  key={slide.id}>
                <ImageLoader src={slide.pathImg} width={636} height={462} alt={slide.title} />
              </SwiperSlide>))}            
          </Swiper>
          <div id='bullets' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>
          <Row className="mt-lg-5 mt-sm-4">
            <Link href='#' className="text-decoration-none col-xl-3 col-sm-4" >
              <Button variant='primary' size='lg' onClick={() => { }}>
                Попробовать
              </Button>
            </Link>
            <Link href='#' className="text-decoration-none col-xl-3 col-sm-4 ms-xl-4 ms-lg-3" >
              <Button variant='outline-primary' size='lg' onClick={() => { }}>
                Подробнее
              </Button>
            </Link>  
          </Row>
        </figure>
        
      </Row>
    </Container>
  </section>
)}