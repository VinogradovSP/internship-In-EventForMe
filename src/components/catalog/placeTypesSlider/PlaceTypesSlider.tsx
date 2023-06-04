import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import { iconSlides, iconSlidesArray } from './PlaceTypes';
import styles from "@/styles/catalog/places/Places.module.scss";

function PlaceTypesSlider() {
  function renderIconSlides( array: iconSlidesArray) {
    return array.map(({ icon, text, path }, index) => (
      <SwiperSlide key={index} className='p-2'>
        <Link href={`?${path}`} className={`${styles.icon} card card-hover text-center border-0 p-2`}>
          <div className='icon-box-media mx-auto fs-5'>
            <i className={icon}></i>
          </div>
          <p className="fs-sm my-1">{text}</p>
        </Link>
      </SwiperSlide>
    ))
  }

  return (
    <div className='position-relative px-3'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={10}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next'
        }}
        grabCursor
        spaceBetween={16}
      >
        {renderIconSlides(iconSlides)}
      </Swiper>
      <Button id='prev' variant='prev' />
      <Button id='next' variant='next' />
    </div>
  )
}

export default PlaceTypesSlider;