import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import ImageLoader from "@/components/_finder/ImageLoader";
import { PlaceCardType } from "@/types/catalog";
import styles from '@/styles/catalog/places/Places.module.scss';

type PlaceCardProps = {
  place: PlaceCardType
}

function PlaceCard({ place }: PlaceCardProps) {

  function renderCardText(title: string, description: string) {
    return (
      <Card.Text className='d-flex align-items-center justify-content-between fs-6'>
        <span className='m-0'>{title}</span>
        <span className='m-0 text-end'><strong>{description}</strong></span>
      </Card.Text>
    )
  }

  return (
    <Card className='card-horizontal card-hover my-5'>
      <Link href={`/catalog/places/${place.id}`} className='card-img-top'>
        <ImageLoader
          src={place.cover_place}
          quality={100}
          layout='fill'
          objectFit='cover'
          alt='Card image'
        />
      </Link>
      <Card.Body className='py-0'>

        <Card.Title className={`d-flex align-items-baseline justify-content-between my-4`}>
          <Link href={`/catalog/places/${place.id}`} className="m-0 text-decoration-none" ><h5>{place.title}</h5></Link>
          <Button className={`${styles.heart__icon} btn btn-icon btn-light btn-xs rounded-circle shadow-sm`}>
            <i className='fi-heart'></i>
          </Button>
        </Card.Title>

        {place.areas.length !== 0 && renderCardText(
          'Вместимость',
          `${place.areas[0].min_capacity} - ${place.areas[0].max_capacity} человек`)
        }

        {place.areas.length !== 0 && renderCardText(
          'Стоимость',
          `Аренда ${place.areas[0].min_price_rent} ₽ + от ${place.areas[0].min_price_banquet} ₽/ч`)
        }

        {place.areas.length !== 0 && renderCardText('Схема оплаты', 'За аренду зала + за банкет')}

        <hr className='text-secondary' />
        <Card.Footer className='d-flex align-items-center justify-content-evenly px-0 '>
          <span>3 банкетных зала</span>
          <span className='fs-4 text-secondary'>|</span>
          <span>2 шатра</span>
          <span className='fs-4 text-secondary'>|</span>
          <span>2 веранды</span>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default PlaceCard;