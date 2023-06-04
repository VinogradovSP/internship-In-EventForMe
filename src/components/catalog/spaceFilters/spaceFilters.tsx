import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownSelect from '@/components/_finder/DropdownSelect';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/catalog/Catalog.module.scss';

function SpaceFilters() {

    return (
        <FormGroup className='d-block my-4'>
            <Row className='g-0 ms-sm-n2'>
                <Col className='d-sm-flex align-items-center'>

                    <DropdownSelect
                        defaultValue='Город'
                        icon='fi-map-pin'
                        options={[
                            [null, 'Москва'],
                            [null, 'Санкт-Петербург'],
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className={styles.catalog__dropdown + ' w-sm-50 border-end-sm'}
                    />
                    <hr className='d-sm-none my-2' />

                    {/* подумать, как правильно получать районы - с городом или сами по себе? */}
                    <DropdownSelect
                        defaultValue='Район'
                        icon='fi-building'
                        options={[
                            [null, 'Васька'],
                            [null, 'Черная речка']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-sm'
                    />
                    <hr className='d-sm-none my-2' />

                    <DropdownSelect
                        defaultValue='Тип площадки'
                        icon='fi-home'
                        options={[
                            [null, 'Ресторан'],
                            [null, 'Банкетный зал']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-sm'
                    />
                    <hr className='d-sm-none my-2' />


                    <DropdownSelect
                        defaultValue='Средний чек'
                        icon='fi-wallet'
                        options={[
                            [null, 'Houses'],
                            [null, 'Apartments'],
                            [null, 'Commercial'],
                            [null, 'Daily rental'],
                            [null, 'New buildings']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-md'
                    />
                    <hr className='d-sm-none my-2' />

                    <DropdownSelect
                        defaultValue='Особенности'
                        icon='fi-grid'
                        options={[
                            [null, 'Houses'],
                            [null, 'Apartments'],
                            [null, 'Commercial'],
                            [null, 'Daily rental'],
                            [null, 'New buildings']
                        ]}
                        darkMenu={false}
                        variant='link ps-2 ps-sm-3'
                        className='w-sm-50 border-end-md'
                    />
                    <hr className='d-sm-none my-2' />

                    <Button>Искать</Button>

                </Col>
            </Row>
        </FormGroup >
    )
}

export default SpaceFilters;