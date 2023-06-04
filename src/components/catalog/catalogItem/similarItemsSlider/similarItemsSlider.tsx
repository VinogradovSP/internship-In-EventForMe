import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation } from 'swiper';
import { Place } from '@/types/catalog';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import CardImageHoverOverlay from '@/components/_finder/CardImageHoverOverlay';
import { similarPlaces } from '@/mocks/similarItemsSlider';
import { Paths } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';

export function SimilarItemsSlider() {
  // если обновлять страницу, то places пустой, поэтому ничего не отображается. До решения проблемы заглушка
  // const places = useSelector(selectPlaces);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mt-5 mb-2 ">
        <h2 className={'h2 mb-0 ' + styles.similarItems__title}>
          Похожие площадки
        </h2>
        <Link
          href={Paths.Catalog + Paths.Places}
          className={'btn btn-link ms-md-3 p-0 ' + styles.summary}
        >
          Вернуться в каталог
          <i className="fi-arrow-long-right ms-2 align-self-center"></i>
        </Link>
      </div>
      <div className="position-relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#prevProperties',
            nextEl: '#nextProperties',
          }}
          autoHeight
          slidesPerView={3}
          data-carousel-options='{"loop": true}'
          spaceBetween={12}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            850: { slidesPerView: 3 },
          }}
          className="pt-3 pb-4 mx-n2"
        >
          {similarPlaces.map((place: Place, indx: number) => (
            <SwiperSlide key={indx} className="h-auto">
              <Card className="card-hover shadow-sm border-0 mx-2">
                <CardImageHoverOverlay
                  img={{
                    src: place.image_vendor,
                    size: [700, 400],
                    alt: place.title,
                  }}
                  light={false}
                  className=""
                >
                  {' '}
                </CardImageHoverOverlay>
                <Card.Body className="text-center">
                  <Card.Title as="h6" className="h6 fs-base text-start mb-0">
                    {place.title}
                  </Card.Title>
                  <CardText
                    title="Вместимость"
                    description={place.capacity + ' человек'}
                  />
                  <CardText
                    title="Схема оплаты"
                    description="Аренда 10 000 ₽ + от 4 000 ₽/ч"
                  />
                  <CardText
                    title="Стоимость"
                    description={place.avg_price + ' ₽'}
                  />
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          id="prevProperties"
          variant="prev"
          className="d-none d-xxl-block mt-n5 ms-n5"
        />
        <Button
          id="nextProperties"
          variant="next"
          className="d-none d-xxl-block mt-n5 me-n5"
        />
      </div>
    </>
  );
}

type cardTextType = {
  title: string;
  description: string;
};

const CardText = ({ title, description }: cardTextType): JSX.Element => (
  <Card.Text
    className={
      'd-flex align-items-center justify-content-between my-1  ' +
      styles.similarItems__text
    }
  >
    <span className="text-start">{title}</span>
    <span className="text-end">
      <small>
        <strong>{description}</strong>
      </small>
    </span>
  </Card.Text>
);
