import Link from 'next/link'
import { FC } from 'react'
import { cardsType } from '@/types/cardsType'
import Image from 'next/image'

export const PhotosWeddingsHeld:FC<cardsType> = ({title, description, pathImg }) => (
  <Link id="album" href="#" style={{maxWidth: '210px'}} className='text-center card-hover text-decoration-none text-dark rounded-3 mx-1'>
    <figure>
      <Image src={pathImg} alt="Card image" width={200} height={100} />
      <figcaption>
        <p className='fs-7 my-2'><strong>{title}</strong></p>
        <p className='fs-sm '>{description}</p>
      </figcaption>
    </figure>    
  </Link>
)