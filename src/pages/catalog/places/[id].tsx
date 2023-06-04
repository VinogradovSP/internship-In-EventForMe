import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Breadcrumb, Col, Row, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AnchorBtns from '@/components/catalog/catalogItem/anchorBtns/AnchorBtns';
import BookingForm from '@/components/bookingForm/BookingForm';
import ContactForm from '@/components/bookingForm/ContactForm';
import AlbumCard from '@/components/catalog/catalogItem/albumCard/AlbumCard';
import {
  PhotosWeddingsHeld,
  ArticlesWeddings,
  TextHeadingDescription,
  TextHeadingSuitableFor,
  TextHeadingDetailsKitchen,
  TextHeadingFeatures,
  TextHeadingSiteDetails,
} from '@/components/catalog';
import { cards } from '@/mocks/cards';
import PlaceAreas from '@/components/catalog/catalogItem/placeAreas/PlaceAreas';
import { SimilarItemsSlider } from '@/components/catalog/catalogItem/similarItemsSlider/similarItemsSlider';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import YaComments from '@/components/catalog/catalogItem/yaComments/YaComments';
import RatingStars from '@/components/catalog/catalogItem/ratingStars/RatingStar';
import { URL, Paths } from '@/constant';
import { User } from '@/types/user';
import { Place } from '@/types/placeType';
import styles from '@/styles/catalog/places/Places.module.scss';

type CatalogItemProps = {
  place: Place;
  user: User;
};

export default function CatalogItem({ place, user }: CatalogItemProps) {
  const { providerCards } = cards || {};
  const { photosHeld } = cards || {};
  const { articles } = cards || {};

  console.log('place', place);

  return (
    <Container>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={Paths.Catalog}>
          Каталог
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={Paths.Places}>
          Площадки
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{place.title}</Breadcrumb.Item>
      </Breadcrumb>

      {/* тестовые данные для разных ситуаций, потом - удалить */}
      <LocationPhotos
        photoUrls={[
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
          'https://picsum.photos/369/224',
        ]}
      />

      {/* это - общий контейнер страницы на все блоки под верхними фото */}

      <Row className={styles.main__container}>
        {/* это - основной контейнер слева на странице */}
        <Col xl={8} className={styles.left__container}>
          <LocationDescription item={place} />

          <AnchorBtns />

          <TextHeadingDescription item={place} />

          <TextHeadingSuitableFor />

          <TextHeadingDetailsKitchen />

          <PlaceAreas areas={place.areas} average_check={place.average_check} />

          <TextHeadingSiteDetails />

          <TextHeadingFeatures />

          {providerCards &&
            providerCards.map((item) => (
              <AlbumCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                pathImg={item.pathImg}
              />
            ))}

          <Row className="my-xl-4 my-md-3 my-sm-2">
            <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2">
              Фото проведенных свадеб на площадке
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              {photosHeld &&
                photosHeld.map((item) => (
                  <PhotosWeddingsHeld
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    pathImg={item.pathImg}
                  />
                ))}
            </div>
          </Row>

          <Row className="justify-content-between my-xl-4 my-md-3 my-sm-2">
            <Card.Title as="h4" className="mb-xl-4 mb-md-3 mb-sm-2 w-100">
              Статьи о свадьбах на площадке “Villa Arcobaleno”
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              {articles &&
                articles.map((item) => (
                  <ArticlesWeddings
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    pathImg={item.pathImg}
                    dateText={item.dateText}
                  />
                ))}
            </div>
          </Row>

          <div id="map" className={styles.map__container}>
            Здесь карта Яндекса с объектом
            <YaMap />
          </div>

          <div id="comments" className={styles.comments__container}>
            <YaComments />
          </div>
        </Col>

        {/* это - боковой контейнер справа на странице */}
        <Col xl={4} lg={8} className={styles.right__container}>
          <div className={styles.popular__container}>
            {/* тестовые данные, потом - удалить */}
            <RatingStars rating={3.7} voices={58} />
            {/* <RatingStars rating={item?.rating?.rating || 0 } voices={item?.rating?.votes || 0} /> */}
            <div className={styles.popular__text}>
              <p className={styles.popular__par}>
                В избранном у&nbsp;<span>{234} человека </span>
              </p>
              <p className={styles.popular__par}>
                Забронировано&nbsp;<span>{12} раз </span>
              </p>
            </div>
          </div>

          {/* тестовые данные, потом - удалить */}
          <BookingForm
            avatar={'https://picsum.photos/100/100'}
            first_name={'Имя'}
            last_name={'Фамилия'}
            phone={'12345678'}
            email={'sshuahuash@mail.ru'}
          />

          <ContactForm />
        </Col>
      </Row>
      <SimilarItemsSlider />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const API = process.env.NODE_ENV === 'production' ? process.env.URL : URL;
  console.log(API);
  let response = await fetch(`${API}catalog/place/${id}/`);
  if (response.ok) {
    let result = await response.json();
    let user = result.user;
    delete result.user;

    if (!result) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        place: result,
        user: user,
      },
    };
  }

  return {
    props: {},
  };
};
