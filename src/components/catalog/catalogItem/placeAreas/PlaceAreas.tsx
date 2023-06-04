import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styles from '@/styles/catalog/places/Places.module.scss';
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
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import DatePicker from 'react-datepicker';
// import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { AreaRecieved, AreaImages } from '@/types/areaType';
import {
  COLOR_HALL,
  SCHEME_OF_PAYMENT,
  TYPE_AREA_DICTIONARY,
} from '@/constant';

type PlaceAreasProps = {
  areas: AreaRecieved[];
  average_check: number;
};

function PlaceAreas({ areas, average_check }: PlaceAreasProps): JSX.Element {
  return (
    <>
      {areas.map((area, index) => (
        <PlaceArea area={area} average_check={average_check} key={index} />
      ))}
    </>
  );
}

type PlaceAreaProps = {
  area: AreaRecieved;
  average_check: number;
};

function PlaceArea({ area, average_check }: PlaceAreaProps): JSX.Element {
  //отображение "Показать еще"
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  function detailsRender(description: string): JSX.Element {
    const new_description = description.slice(0, 100) + '...';
    return (
      <>
        {description.length < 100 ? (
          <p>{description}</p>
        ) : (
          <>
            <p style={isDetailsOpen ? { display: 'none' } : {}}>
              {new_description}
            </p>
            <p style={!isDetailsOpen ? { display: 'none' } : {}}>
              {description}
            </p>
            <p
              onClick={() => setIsDetailsOpen((prev) => !prev)}
              className={'mb-0 text-primary cursor-pointer ' + styles.summary}
            >
              {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
            </p>
          </>
        )}
      </>
    );
  }

  //для отображения кол-ва фото и на какой фото находится пользователь
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const SlidesCount = () => (
    <div className="swiper-slides-count text-dark bg-light rounded-2 p-1">
      <i className="fi-image fs-lg me-2"></i>
      <div className="fs-6 fw-bold ps-1 me-2">
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  );

  const [isCalendarShown, setIsCalendarShown] = useState(false);

  //для формы "рассчитать стоимость"
  const [isCalcShown, setIsCalcShown] = useState(false);
  const handleModalClose = () => setIsCalcShown(false);
  const handleModalShow = () => setIsCalcShown(true);

  const [peopleQuantity, setPeopleQuantity] = useState<number>(0);
  const onChangePeople = (e: ChangeEvent<HTMLInputElement>) => {
    setPeopleQuantity(+e.currentTarget.value);
  };

  const calculateCost = () => {
    if (peopleQuantity) {
      return average_check * peopleQuantity > area.min_price_banquet
        ? average_check * peopleQuantity
        : area.min_price_banquet;
    } else return 0;
  };

  // Form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };

  // Единый Вид Названия Помещений
  function capitalize(str: string) {
    return str.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  //для красивого вывода данных из дропдаунов формы добавления
  const findTitle = (dictionary: string[][], value: string): string => {
    const title = dictionary.find((item: string[]) => item[0] === value);

    if (title === undefined) return 'Не указано';

    return title[1];
  };
  const [photos, setPhotos] = useState<string[]>([]);
  useEffect(() => {
    combinePhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const combinePhotos = () => {
    const emptyPhoto = '/img/emptyPhoto.png';
    const imageArray = area.images_area.map((img) => img.image);
    if (area.cover_area) imageArray.unshift(area.cover_area);
    if (imageArray.length === 2) setPhotos([...imageArray, emptyPhoto]);
    else setPhotos(imageArray);
  };

  return (
    <>
      <section
        className={'card card-body border-0 shadow-sm card-hover mb-xl-5 mb-4'}
      >
        <h4 className="h4 text-weight-bold">{capitalize(area.title)}</h4>
        <div className="d-flex mb-3" style={{ fontWeight: '500' }}>
          <button
            className={styles.calc_btn + ' btn btn-primary'}
            onClick={handleModalShow}
          >
            <i className="fi-calculator fs-lg me-1"></i>Рассчитать стоимость
          </button>
          {/* Property cost calculator modal */}
          <Modal centered show={isCalcShown} onHide={handleModalClose}>
            <Modal.Header className="d-block position-relative border-0 pb-0 px-sm-5 px-4">
              <Modal.Title as="h4" className="mt-4 text-center">
                Рассчитать стоимость
              </Modal.Title>
              <CloseButton
                onClick={handleModalClose}
                aria-label="Закрыть окно"
                className="position-absolute top-0 end-0 mt-3 me-3"
              />
            </Modal.Header>
            <Modal.Body className="px-sm-5 px-4">
              <Form
                onSubmit={handleSubmit}
                className="fs-6 fw-normal pt-2 mb-3"
              >
                <Form.Group controlId="calculate-cost" className="pt-2 mb-3">
                  {/* //!При нажатии авторизованным пользователем количество
                    гостей подставляется из личного кабинета. Можно изменить.*/}
                  <Form.Label className="mb-2">
                    Укажите количество гостей
                  </Form.Label>
                  <Form.Control type="number" onChange={onChangePeople} />
                </Form.Group>
                <Form.Text>
                  <p className="mb-0">Минимальная стоимость:</p>
                  <p className="fs-5 fw-bold">{area.min_price_banquet} ₽</p>
                </Form.Text>
                <Form.Text>
                  <p className="mb-0 text-dark">Итоговая стоимость:</p>
                  <p className="fs-5 fw-bold text-primary">
                    {calculateCost()} ₽
                  </p>
                </Form.Text>
              </Form>
            </Modal.Body>
          </Modal>

          <div className={styles.calendar_wrapper}>
            <button
              onClick={() => setIsCalendarShown((prev) => !prev)}
              className={styles.busy_btn}
            >
              <i className="fi-calendar fs-lg me-1"></i>Проверить занятость
            </button>
            <div
              className={
                isCalendarShown ? styles.calendar : styles.calendar_none
              }
            >
              <DatePicker
                onChange={() => {}}
                minDate={new Date(Date.now())}
                //на год от сегодняшней даты
                maxDate={new Date(Date.now() + 3.156e10)}
                placeholderText="Select a date"
                className="rounded-1 pe-5"
                readOnly
                excludeDates={[
                  new Date(area.reserved_days),
                  // addDays(new Date(), 1),
                  // addDays(new Date(), 10),
                ]}
                inline
              />
            </div>
          </div>
        </div>
        {/* иначе видно 0 */}
        {photos.length > 0 && (
          <LightGallery
            selector=".gallery-item"
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
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1 + 2);
                }}
                onInit={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1 + 2);
                  setTotalSlides(swiper.slides.length);
                }}
              >
                {photos.length === 1 ? (
                  <GalleryItem
                    href={photos[0]}
                    thumb={[photos[0], 900, 230]}
                    data-external-thumb-image={photos[0]}
                    imgAlt={area.title}
                    light={false}
                    caption=""
                    video={false}
                    className="w-100"
                  />
                ) : (
                  photos.map((img, indx) => (
                    <SwiperSlide key={indx}>
                      <GalleryItem
                        href={img}
                        thumb={[img, 313, 230]}
                        data-external-thumb-image={img}
                        imgAlt={area.title}
                        className={`${indx === 0 ? styles.rounded_left : ''}${
                          indx === photos.length - 1 ? styles.rounded_right : ''
                        }  `}
                        light={false}
                        caption=""
                        video={false}
                      />
                    </SwiperSlide>
                  ))
                )}
                {photos.length > 3 && <SlidesCount />}
              </Swiper>

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
        )}

        <div className={styles.slider_text_wrapper}>
          <div className="d-md-flex">
            <div className={styles.left_block + ' me-0 me-md-4'}>
              <div className={styles.slider_text}>
                <p>Вместимость</p>
                <p className={styles.slider_text_data}>
                  {area.min_capacity}-{area.max_capacity} человек
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Схема оплаты</p>
                <p className={styles.slider_text_data}>
                  {findTitle(SCHEME_OF_PAYMENT, area.scheme_of_payment)}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Стоимость</p>
                <p className={styles.slider_text_data}>
                  Аренда от {area.min_price_rent}₽ + от {area.deposit}₽/чел
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Цвет зала</p>
                <p className={styles.slider_text_data}>
                  {findTitle(COLOR_HALL, area.color_hall)}
                </p>
              </div>
            </div>
            <div className={styles.right_block}>
              <div className={styles.slider_text}>
                <p>Тип</p>
                <p className={styles.slider_text_data}>
                  {findTitle(TYPE_AREA_DICTIONARY, area.type_area.type_area)}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Отдельный вход</p>
                <p className={styles.slider_text_data}>
                  {area.separate_entrance ? 'Да' : 'Нет'}
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Минимальная стоимость банкета</p>
                <p className={styles.slider_text_data}>
                  {area.min_price_banquet}₽
                </p>
              </div>
              <div className={styles.slider_text}>
                <p>Возможна аренда без еды</p>
                {/* //! Заглушка */}
                <p className={styles.slider_text_data}>Да</p>
              </div>
            </div>
          </div>

          <div className={styles.slider_text_bottom + ' d-md-flex'}>
            {area.sale && (
              <div
                className={
                  styles.sale + ' order-2 my-4 ms-md-3 mx-auto w-75 w-md-auto'
                }
              >
                {/* //! в форме заполнения помещения нет соответствующего поля */}
                {/* <p className="fw-semibold">{place.sale.condition}</p> */}

                {/* //! тут по ТЗ: при нажатии открывается карусель фото комнаты, но я пока сделала бэйдж до прояснения вопроса (дизайнер тоже бэйдж сделала) */}
                <Badge className="bg-faded-primary fw-bold fs-sm py-2 px-3">
                  <i className="fi-gift fs-lg me-1"></i>
                  {area.sale}
                </Badge>
              </div>
            )}
            <div className={styles.slider_details + ' order-1 mt-5 mt-md-0'}>
              <h4 className="h4">Детали</h4>
              {detailsRender(area.detail_location)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlaceAreas;
