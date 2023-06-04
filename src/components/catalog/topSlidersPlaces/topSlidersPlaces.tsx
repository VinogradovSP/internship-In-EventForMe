import { FC } from "react"
// import IconBox from '@/components/_finder/IconBox'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'react-bootstrap/Button'
import 'swiper/css/bundle'
import Link from "next/link"


export const TopSlidersPlaces:FC =() => {

  return(
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
      {iconSlides && iconSlides.map(({icon, text}, index)=> (
        <SwiperSlide key={index} className='p-2'>
          <Link href="#" className="icon-box card card-hover text-center border-0 p-2">
            <div className="icon-box-media mx-auto  text-light-primary fs-5">
              <i className={`${icon} text-dark`}></i>
            </div>
            <p className="fs-sm my-1 text-dark">{text}</p>
          </Link>
          {/* <IconBox
            href='#'
            media={`${icon} m-0`}
            mediaColor='outline-dark mb-1'
            text={text}
            type='card'
            align='center'
            className='mb-3 border-0 p-0'
          /> */}
        </SwiperSlide>
      ))}      
    </Swiper>
    <Button id='prev' variant='prev' />
    <Button id='next' variant='next' />
  </div>
    
)}

const iconSlides = [
  {icon: 'fi-glass', text: 'Банкет. зал'},
  {icon: 'fi-tent', text: 'Шатёр'},
  {icon: 'fi-umbrella', text: 'Веранда'},
  {icon: 'fi-sailboat', text: 'Яхт-клуб'},
  {icon: 'fi-motor-ship', text: 'Теплоход'},
  {icon: 'fi-disco-ball', text: 'Лофт'},
  {icon: 'fi-real-estate-house', text: 'Усадьба'},
  {icon: 'fi-cocktail', text: 'Ресторан'},
  {icon: 'fi-bed', text: 'База отыха'},
  {icon: 'fi-cafe', text: 'Кафе'},
  {icon: 'fi-house-chosen', text: 'Котедж'},
  {icon: 'fi-apartment', text: 'Отель'},
  {icon: 'fi-castle', text: 'Замок'},
  {icon: 'fi-glass', text: 'Банкет. зал'},
  {icon: 'fi-tent', text: 'Шатёр'},
  {icon: 'fi-umbrella', text: 'Веранда'},
  {icon: 'fi-sailboat', text: 'Яхт-клуб'},
  {icon: 'fi-motor-ship', text: 'Теплоход'}
]