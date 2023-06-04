import Link from 'next/link';
import Image from 'next/image';

type WeddingPhotosProps = {
  title: string,
  description: string,
  pathImg: string
}

function WeddingsPhotos({ title, description, pathImg }: WeddingPhotosProps) {
  return (
    <Link id="album" href="#" style={{ maxWidth: '210px' }} className='text-center card-hover text-decoration-none text-dark rounded-3 mx-1'>
      <figure>
        <Image src={pathImg} alt="Card image" width={200} height={100} />
        <figcaption>
          <p className='fs-7 my-2'><strong>{title}</strong></p>
          <p className='fs-sm '>{description}</p>
        </figcaption>
      </figure>
    </Link>)

}

export default WeddingsPhotos;