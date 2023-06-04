import Image from 'next/image';
import Card from 'react-bootstrap/Card';

function DescriptionCard() {
  return (
    <>
      <Card className='card-horizontal'>
        <div className='card-img-top'>
          <Image
            src='/images/real-estate/catalog/03.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
            alt='Card image'
          />
        </div>
        <Card.Body>
          <Card.Title as='h5'>Card title</Card.Title>
          <Card.Text className='fs-sm'>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content within card&apos;s body.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default DescriptionCard;