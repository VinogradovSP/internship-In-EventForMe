import Link from "next/link";
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ImageLoader from '../../_finder/ImageLoader';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "@/styles/main/Main.module.scss";
import {suppliers} from "@/mocks/supplierSlider";
import {MainTitle} from "@/components/main/title/title";


function SupplierSlider(): JSX.Element {

    return (
        <Container as='section' className="mx-auto w-75">
            <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
                <MainTitle suptitle={'Нам доверяют'} title={'Только проверенные исполнители и площадки'}/>

                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h3 className={styles.main__subtitle + ' h3 mb-sm-0'}>Лучшие исполнители</h3>
                </div>

                {/* Carousel */}
                <div className='position-relative'>
                    <Swiper
                        modules={[Navigation]}
                        // loop={true}
                        navigation={{
                            prevEl: '#prev',
                            nextEl: '#next'
                        }}
                        breakpoints={{
                            0: {slidesPerView: 1},
                            420: {slidesPerView: 1},
                            700: {slidesPerView: 2},
                            850: {slidesPerView: 3},
                            1300: {slidesPerView: 4}
                        }}
                        className='mx-n2'
                        data-carousel-options='{"loop": true}'
                    >
                        {suppliers.map((supplier, index) => (
                            <SwiperSlide key={index} className='h-auto'>
                                <Link href={supplier.href} className='position-relative'>
                                    <div className='rounded-3'>
                                        <div className='d-inline-block mx-2'>
                                            <ImageLoader src={supplier.image} width={306} height={400}
                                                         alt={supplier.name}/>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* External Prev/Next buttons */}
                    <Button id='prev' variant='prev' className='d-none d-sm-block ms-3'/>
                    <Button id='next' variant='next' className='d-none d-sm-block me-3'/>
                </div>
            </section>
        </Container>
    )
}


export default SupplierSlider;