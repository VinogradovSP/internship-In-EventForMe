//@ts-nocheck
import dynamic from 'next/dynamic';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormGroup from '../../_finder/FormGroup';
import DropdownSelect from '../../_finder/DropdownSelect';
import styles from "@/styles/main/Main.module.scss";


const BgParallax = dynamic(() => import('../../_finder/BgParallax'), { ssr: false })

function Hero(): JSX.Element {
  return (
     <div className='my-3'>
        <BgParallax
          imgSrc='/img/hero/hero.png'
          type='scroll' // scale, opacity, scroll-opacity, scale-opacity
          speed={0.5} // from -1.0 to 2.0
          overlay={45} // from 0 to 100 or 'gradient' to apply gradient overlay
          contentWrapper={{
            style: {maxWidth: '914px'}
          }}
          className='card rounded-0 align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3'
          style={{minHeight: '100vh'}}
        >
          <h1 className={styles.hero__title}>Организовать свадьбу стало легче</h1>
          <h2 className={styles.hero__subtitle}>Лучшие исполнители, локации, создание приглашений и списков на одном портале</h2>

          <FormGroup className='d-block'>
            <Row className='g-0'>
              <Col md={10} className='d-sm-flex align-items-center'>
                <DropdownSelect
                  defaultValue='Исполнитель'
                  icon='fi-home'
                  options={[
                    [null, 'For rent'],
                    [null, 'For sale']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                
                <DropdownSelect
                  defaultValue='Город'
                  icon='fi-map-pin'
                  options={[
                    [null, 'New York'],
                    [null, 'Chicago'],
                    [null, 'Los Angeles'],
                    [null, 'San Diego']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />
                
                <DropdownSelect
                  defaultValue='Стоимость'
                  icon='fi-map-pin'
                  options={[
                    [null, 'New York'],
                    [null, 'Chicago'],
                    [null, 'Los Angeles'],
                    [null, 'San Diego']
                  ]}
                  variant='link ps-2 ps-sm-3'
                  className='w-sm-50 border-end-sm'
                />
                <hr className='d-sm-none my-2' />

              </Col>
              <hr className='d-md-none mt-2' />

              <Col md={2} className='d-sm-flex align-items-center pt-3 pt-md-0'>
                <Button className='w-100'>Поиск</Button>
              </Col>
            
            </Row>
          </FormGroup>
        </BgParallax>
      </div>
  )
}

export default Hero;