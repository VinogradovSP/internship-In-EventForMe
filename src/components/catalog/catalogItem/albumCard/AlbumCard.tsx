import { useState } from "react";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { providerCards } from "@/types/cardsType";
import styles from "@/styles/catalog/places/Places.module.scss";
import 'swiper/css/bundle';
import GalleryItem from '@/components/_finder/GalleryItem';
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-fullscreen.css'

type AlbumCardProps = {
  id: number,
  title: string,
  description: string[],
  pathImg: string[],
}

function AlbumCard ({id, title, description, pathImg}: AlbumCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)

  const SlidesCount = () => (
    <div className='swiper-slides-count text-dark bg-light rounded-2 p-1'>
      <i className='fi-image fs-lg me-2'></i>
      <div className='fs-6 fw-bold ps-1 me-2'>
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
    </div>
  )
  
  return(
  <figure id="territory" 
    className={id % 2  === 0 ? styles.text_territory_reverse : styles.text_territory}
  >
    <figcaption >
      <h4 className='mb-3'>{title}</h4>
      {description && description.map((text, index)=>(
        <p key={index} className='mb-2'>{text}</p>
      ))}
    </figcaption>

    <LightGallery
      // licenseKey={process.env.NODE_ENV==='production'? process.env.NEXT_PUBLIC_LG : ''}
      plugins={[lgThumbnail, lgZoom, lgFullScreen]}
      selector='.gallery-item'
      zoomFromOrigin={false}
      exThumbImage='data-external-thumb-image'
    >
      <Swiper
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
        onInit={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
          setTotalSlides(swiper.slides.length - 2)
        }}
        navigation
        spaceBetween={12}
        loop
        grabCursor
        className='swiper-nav-onhover m-0'
        style={{maxWidth: '24rem'}}
      >
        {pathImg && pathImg.map((path, index)=>
          (<SwiperSlide key={index}>
            <GalleryItem 
              href={path}
              thumb={[path, 420, 270]}
              data-external-thumb-image={path}
              imgAlt='Image'

              quality={100} 
              className={id % 2  === 0 ? styles.rounded_left : styles.rounded_right }
              light={false}
              caption=""
              video={false}
            />
          </SwiperSlide>)
        )}
        <SlidesCount />
      </Swiper>
    </LightGallery>
  </figure>    
)
}

export default AlbumCard;