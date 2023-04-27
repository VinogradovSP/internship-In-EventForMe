import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styles from '@/styles/catalog/places/Places.module.scss';
import Link from 'next/link';

import GalleryItem from '@/components/_finder/GalleryItem';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

const places = [
  {
    href: '#',
    imgSrc: [
      '/img/locations/1.png',
      '/img/locations/2.png',
      '/img/locations/3.png',
      '/img/locations/1.png',
      '/img/locations/2.png',
      '/img/locations/3.png',
    ],
    title: 'Berlin Business Hotel',
    rating: [5.0, 48],
    price: 'Аренда 10 000 ₽ + от 4 000 ₽/чел',
    location: '1.4 km from center',
    description:
      'Минимальная стоимость банкета в Пт. 150 000 руб., Сб. 180 000 руб. Аренда зала в Пт. 15 000 руб., в Сб. 20 000 руб.Минимальная стоимость банкета в Пт. 150 000 руб., Сб. 180 000 руб. Аренда зала в Пт. 15 000 руб., в Сб. 20 000 руб.',
    capacity: '30-80 человек',
    payment: 'За аренду зала + еда и напитки',
    lightHall: true ? 'Да' : 'Нет',
    type: 'Помещение',
    addEntrance: true ? 'Да' : 'Нет',
    withoutFood: true ? 'Да' : 'Нет',
    minBanketPrice: 100000,
    sale: {
      btn: 'Номер для молодоженов',
      condition: 'При аренде панорамного шатра',
    },
  },
];

export default function CatalogItemSlider(): JSX.Element {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  function detailsRender(description: string): JSX.Element {
    const new_description = description.slice(0, 100) + '...';
    return (
      <>
        <p style={isDetailsOpen ? { display: 'none' } : {}}>
          {new_description}
        </p>
        <p style={!isDetailsOpen ? { display: 'none' } : {}}>{description}</p>
        <p
          onClick={() => setIsDetailsOpen((prev) => !prev)}
          className={'mb-0 text-primary cursor-pointer ' + styles.summary}
        >
          {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
        </p>
      </>
    );
  }

  return (
    <>
      {places.map((place, index) => (
        <section
          className={
            'card card-body h-100 border-0 shadow-sm card-hover' +
            styles.catalog_item_slider
          }
          key={index}
        >
          <h4 className="h4 text-weight-bold">{place.title}</h4>

          <div className="d-flex" style={{ fontWeight: '500' }}>
            <span>
              <i className="fi-calculator fs-lg me-1"></i>Рассчитать стоимость
            </span>
            <span>
              <i className="fi-calendar fs-lg me-1"></i>Проверить занятость
            </span>
          </div>
          <LightGallery
            selector=".gallery-item"
            licenseKey="D4194FDD-48924833-A54AECA3-D6F8E646"
            plugins={[lgThumbnail, lgZoom, lgFullScreen]}
            zoomFromOrigin={true}
            exThumbImage="data-external-thumb-image"
          >
            <div className="position-relative">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '#prev',
                  nextEl: '#next',
                }}
                spaceBetween={12}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  500: { slidesPerView: 2 },
                  850: { slidesPerView: 3 },
                }}
                data-carousel-options='{"loop": true}'
              >
                {place.imgSrc.map((img, indx) => (
                  <SwiperSlide key={indx}>
                    <GalleryItem
                      href={img}
                      thumb={[img, 313, 230]}
                      data-external-thumb-image={img}
                      imgAlt={place.title}
                      className={`${indx === 0 ? styles.rounded_left : ''}${
                        indx === place.imgSrc.length - 1
                          ? styles.rounded_right
                          : ''
                      }  `}
                      light={false}
                      caption=""
                      video={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* External Prev/Next buttons */}
              <Button
                id="prev"
                variant="prev"
                className="d-none d-sm-block ms-4"
              />
              <Button
                id="next"
                variant="next"
                className="d-none d-sm-block me-4"
              />
            </div>
          </LightGallery>

          <div className={styles.slider_text_wrapper}>
            <div className="d-flex">
              <div className={styles.left_block}>
                <div className={styles.slider_text}>
                  <p>Вместимость</p>
                  <p className={styles.slider_text_data}>{place.capacity}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Схема оплаты</p>
                  <p className={styles.slider_text_data}>{place.payment}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Стоимость</p>
                  <p className={styles.slider_text_data}>{place.price}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Светлый зал</p>
                  <p className={styles.slider_text_data}>{place.lightHall}</p>
                </div>
              </div>
              <div className={styles.right_block}>
                <div className={styles.slider_text}>
                  <p>Тип</p>
                  <p className={styles.slider_text_data}>{place.type}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Отдельный вход</p>
                  <p className={styles.slider_text_data}>{place.addEntrance}</p>
                </div>
                <div className={styles.slider_text}>
                  <p>Минимальная стоимость банкета</p>
                  <p className={styles.slider_text_data}>
                    {place.minBanketPrice} ₽
                  </p>
                </div>
                <div className={styles.slider_text}>
                  <p>Возможна аренда без еды</p>
                  <p className={styles.slider_text_data}>{place.withoutFood}</p>
                </div>
              </div>
            </div>

            <div className={styles.slider_text_bottom}>
              <div className={styles.slider_details}>
                <h4 className="h4">Детали</h4>
                {detailsRender(place.description)}
              </div>
              <div className={styles.sale}>
                <p style={{ fontWeight: '500' }}>{place.sale.condition}</p>
                <Badge className={styles.badge}>
                  <i className="fi-gift fs-lg me-1"></i>
                  {place.sale.btn}
                </Badge>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}