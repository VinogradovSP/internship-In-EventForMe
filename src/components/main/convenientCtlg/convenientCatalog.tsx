import { cards } from '@/mocks/cards';
import { FC } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ImageLoader from '../../_finder/ImageLoader';
import { Navigation, Pagination, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { CardConCat } from './cardConCat';
import styles from './convenientCatalog.module.scss';

export const ConvenientCatalog: FC = () => {
  const { CardsConCat } = cards || {};
  const { slidesCatalog } = cards || {};

  if (!CardsConCat) {
  }

  return (
    <section className={styles.top}>
      <Container as="section" className="mx-auto w-75">
        <Row className="m-0 justify-content-center">
          <Row
            className="col-xl-6 col-sm-12 g-4 p-0 justify-content-center justify-content-xl-start"
            style={{ gap: '1.5rem' }}
          >
            {CardsConCat &&
              CardsConCat.map((item) => (
                <CardConCat
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  nameImg={item.nameImg}
                  color={item.color}
                />
              ))}
          </Row>

          <figure className="border-0 align-items-center col-lg-6 col-md-8 col-sm-10 g-4 px-0 mt-5 ">
            <figcaption>
              <h2>Удобный каталог</h2>
              <p className="mt-3 mb-5">
                Более подробное описание категории: важные фильтры, советы и др.
                We have the most comprehensive directory of estate agents to
                help you with all your property needs. Whether buying, selling
                or renting start your search.
              </p>
            </figcaption>
            <Swiper
              modules={[Navigation, Pagination, EffectCube]}
              spaceBetween={16}
              navigation
              pagination={{
                el: '#bullets',
                clickable: true,
              }}
              effect={'cube'}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              grabCursor
            >
              {slidesCatalog &&
                slidesCatalog.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <ImageLoader
                      src={slide.pathImg}
                      width={636}
                      height={462}
                      alt={slide.title}
                      className="rounded-3"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div
              id="bullets"
              className="swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3"
            ></div>
            <Row className="mt-lg-5 mt-sm-4 justify-content-md-center">
              <Button
                type="button"
                href="/catalog"
                variant="primary"
                className="text-decoration-none col-xl-3 col-sm-4"
                size="lg"
              >
                Попробовать
              </Button>
              <Button
                type="button"
                href="/catalog"
                variant="outline-primary"
                className="text-decoration-none col-xl-3 col-sm-4 ms-xl-4 ms-lg-3"
                size="lg"
              >
                Подробнее
              </Button>
            </Row>
          </figure>
        </Row>
      </Container>
    </section>
  );
};
