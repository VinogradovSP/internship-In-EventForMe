import Link from 'next/link'
import { FC } from 'react'
import { cardsType } from '@/types/cardsType'
import Image from 'next/image'
import { Col } from 'react-bootstrap'

export const PhotosWeddingsHeld:FC<cardsType> = ({title, description, pathImg }) => (
  <Col sm={6} md={3} className='card-hover rounded-3 my-3'>
    <Link id="album" href="#" style={{maxWidth: '210px'}} className='text-center text-decoration-none text-dark'>
      <figure>
        <Image src={pathImg} alt="Card image" width={200} height={100} />
        <figcaption>
          <p className='fs-7 my-2'><strong>{title}</strong></p>
          <p className='fs-sm '>{description}</p>
        </figcaption>
      </figure>    
    </Link>
  </Col>
)