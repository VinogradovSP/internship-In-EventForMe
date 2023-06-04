import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import LocationPhotos from '@/components/catalog/catalogItem/locationPhotos/locationsPhotos';
import LocationDescription from '@/components/catalog/catalogItem/locationPhotos/LocationDescription';
// import {
//     PhotosWeddingsHeld,
//     ProviderCardSpecialBlock,
//     TextHeadingDescription,
//     TextHeadingSiteDetails
// } from '@/components/catalog';
// import CatalogItemSlider from '@/components/catalog/catalogItem/catalogItemSlider/CatalogItemSlider';
import { cards } from '@/mocks/cards';
import YaMap from '@/components/catalog/catalogItem/yaMap/yaMap';
import { PlaceReceived } from '@/types/placeType';
import { KITCHEN, FEATURES } from '@/constant';
import { temporaryComponent } from '../temporaryComponent';
import TextDescription from '@/components/catalog/catalogItem/textComponents/TextDescription';

type PreviewProps = {
  previewShow: boolean;
  handlePreviewClose: () => void;
  place: PlaceReceived;
};

function Preview({ previewShow, handlePreviewClose, place }: PreviewProps) {
  // const { providerCards } = cards || {};
  // const { photosHeld } = cards || {};
  // const { festivEvents } = cards || {};
  const { event } = place || [];
  const { kitchen } = place || [];
  const { type_feature } = place || [];

  console.log('place', place);

  return (
    <Modal fullscreen show={previewShow} onHide={handlePreviewClose}>
      <Modal.Header closeButton className={styles.preview_header}>
        <h3 className="h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap">
          {'Предпросмотр\u00a0'}
          <span>площадки</span>
        </h3>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column p-0">
        <Container className="mt-2 mt-sm-0 py-4 py-sm-5">
          <LocationPhotos
            photoUrls={[
              'https://picsum.photos/700/400',
              'https://picsum.photos/350/200',
              'https://picsum.photos/700/400',
              'https://picsum.photos/369/224',
              'https://picsum.photos/369/224',
            ]}
          />

          <Col className="w-lg-75 m-auto px-3">
            <LocationDescription item={place} />

            <TextDescription item={place} />

            <Row className="mb-xl-5 mb-md-4 mb-sm-3">
              <h4>Подходит для:</h4>
              <Row xs={1} sm={2} md={3}>
                {event?.map((item, i) => {
                  // костыль для связки 2-х массивов, пока нет бэка
                  // отображаем только то, что кликнул поставщик
                  const renderEvent = festivEvents.find(
                    (festivEvent) => festivEvent.alt == item
                  );

                  return (
                    <Col key={i} className="mb-1">
                      <i className={`${renderEvent?.icon} me-2`} />
                      {renderEvent?.action}
                    </Col>
                  );
                })}
              </Row>
            </Row>

            <div
              className={
                styles.text__cuisine_container +
                ' border-0 mb-xl-5 mb-md-4 mb-sm-3 d-flex'
              }
            >
              <Card.Body className="p-0">
                <Card.Title as="h4" className="mb-3">
                  Детали о кухне площадки:
                </Card.Title>
                <Card.Text className="mb-2 d-flex align-items-center">
                  <i className="fi-union me-2 fs-sm" />
                  {temporaryComponent(kitchen, KITCHEN) || 'Не указано'}
                </Card.Text>
                <Card.Text className="mb-2">
                  <i className="fi-ticket me-2 fs-sm" />
                  {place.children_kitchen
                    ? 'Есть детское меню'
                    : 'Нет детского меню'}
                </Card.Text>
              </Card.Body>
              <Button href="#" className={styles.text__cuisine_btn}>
                <i className="fi-file-clean me-2" />
                Запросить банкетное меню
              </Button>
            </div>

            <CatalogItemSlider />

            {/* в компоненте сделал логику для "Предпросмотра" и "карты поставщика" */}
            <TextHeadingSiteDetails description={place.description} />

            <Row className="mb-xl-5 mb-md-4 mb-sm-3">
              <h4>Особенности</h4>
              <Row xs={1} sm={2} md={3}>
                {temporaryComponent(type_feature, FEATURES)}
              </Row>
            </Row>

            {providerCards &&
              providerCards.map((item) => (
                <ProviderCardSpecialBlock
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  pathImg={item.pathImg}
                />
              ))}

            <Row>
              <Card.Title as="h4" className="text-sm-center text-md-start">
                Фото проведенных свадеб на площадке
              </Card.Title>
              <Row>
                {photosHeld &&
                  photosHeld.map((item) => (
                    <PhotosWeddingsHeld
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      pathImg={item.pathImg}
                    />
                  ))}
              </Row>
            </Row>

            <Col md={12} className="my-5" id="map">
              <h4>Расположение</h4>
              <YaMap />
            </Col>
          </Col>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Preview;
