import Link from "next/link";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import Pagination from 'react-bootstrap/Pagination';
import Title from "@/components/catalog/title/Title";
import Sidebar from "@/components/catalog/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { selectPlaces, setPlaces } from "@/store/catalog/catalogSlice";
import Sorting from "@/components/catalog/sorting/Sorting";
import SpaceFilters from "@/components/catalog/spaceFilters/spaceFilters";
import { CatalogPlaceCard, TopSlidersPlaces } from "@/components/catalog/";
import styles from '@/styles/catalog/places/Places.module.scss';
//для SSR
import { URL } from "@/constant";
import { Place, Area } from "@/types/catalog";
import { GetStaticProps } from "next";


type CatalogPlacesProps = {
  places: Place[],
};


function CatalogPlaces({ places }: CatalogPlacesProps) {
  const [sortedPlaces, setSortedPlaces] = useState<Place[] | null>(null);
  const unsortedPlaces = useSelector(selectPlaces);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPlaces(places));
  }, [])

  function sortPlacesByParam(param: string) {
    switch (param) {
      case 'popularity':
        let sortedByRating = places.slice().sort((a: Place, b: Place) => b.rating.rating - a.rating.rating);
        setSortedPlaces(sortedByRating);
        break;
      case 'lowPrice':
        //здесь логика сортировки
        break;
      case 'hightPrice':
        //здесь логика сортировки
        break;
    }
  }

  function renderAllPlaces(places: Place[]) {
    
    return(
      places.map((place) => (
        <CatalogPlaceCard key={place.id} place={place} />
      )
    )
    )
    // return places.map((place) => (
    //   <article key={place.id}>
    //     <h3>{place.title}</h3>
    //     <Image src={place.image_vendor} alt='Фото площадки' width={500} height={150} className={styles.catalog__image} />
    //     <h5>Рейтинг: {place.rating.rating}, голосов {place.rating.votes}</h5>
    //     <p>Адрес: {place.address.full}</p>
    //     <p>Поставщик: {place.user.name + ' ' + place.user.surname}</p>
    //     <p>Описание: {place.short_description}</p>
    //     {renderAreasInOnePlace(place.area)}
    //     <br />
    //     <br />
    //   </article>
    // ))
  }

  function renderAreasInOnePlace(areas: Area[]) {
    return areas.map((area) => (
      <div key={area.id}>
        <h5>{area.title}</h5>
        <p>Стоимость: {area.min_price}</p>
        <Image src={area.image_area} alt='Фото локации' width={500} height={150} className={styles.catalog__smallimage} />
      </div>
    ))
  }

  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Каталог</Breadcrumb.Item>
        <Breadcrumb.Item active>Площадки</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Title title={'Площадки'} quantity={places.length} />
        <TopSlidersPlaces/>
        <SpaceFilters />
                
        <Row className="p-0">
          <Sidebar />
          <Col className="ms-4 p-0">
            <Sorting sortingCB={sortPlacesByParam} />

            <section>
              {sortedPlaces?
                renderAllPlaces(sortedPlaces)
                :
                renderAllPlaces(places)
              }
            </section>

            <Pagination size='lg'>
              <Pagination.Item>
                <i className='fi-chevron-left'></i>
              </Pagination.Item>
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>
                <i className='fi-chevron-right'></i>
              </Pagination.Item>
            </Pagination>
          </Col>
          
        </Row>
      </Row>

    </Container>
  )
}

export default CatalogPlaces;

export const getStaticProps:GetStaticProps = async() => {
  const response = await fetch(`${URL}/places/`);
  const places: Place[] = await response.json();
  
  if (!places) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      places,
    }
  }

}

//SSR
// export async function getServerSideProps() {
//   const response = await fetch(`${URL}/places/`);
//   const places: Place[] = await response.json();
//   return {
//     props: {
//       places,
//     },
//   }
// }