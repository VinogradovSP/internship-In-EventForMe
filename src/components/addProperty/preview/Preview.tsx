import { useState } from 'react'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import ImageLoader from '@/components/_finder/ImageLoader';

type PreviewProps = {
    previewShow: boolean,
    handlePreviewClose: () => void
}

function Preview({ previewShow, handlePreviewClose }: PreviewProps) {
    // Overview collapse state
    const [overviewOpen, setOverviewOpen] = useState(false);

    // Amenities collapse state
    const [amenitiesOpen, setAmenitiesOpen] = useState(false)

    // Amenities array
    const amenitiesPreview = [
        [
            { icon: 'fi-wifi', title: 'Free WiFi' },
            { icon: 'fi-thermometer', title: 'Heating' },
            { icon: 'fi-dish', title: 'Dishwasher' },
            { icon: 'fi-parking', title: 'Parking place' },
            { icon: 'fi-snowflake', title: 'Air conditioning' },
            { icon: 'fi-iron', title: 'Iron' },
            { icon: 'fi-tv', title: 'TV' },
            { icon: 'fi-laundry', title: 'Laundry' },
            { icon: 'fi-cctv', title: 'Security cameras' }
        ],
        [
            { icon: 'fi-no-smoke', title: 'No smocking' },
            { icon: 'fi-pet', title: 'Cats' },
            { icon: 'fi-swimming-pool', title: 'Swimming pool' },
            { icon: 'fi-double-bed', title: 'Double bed' },
            { icon: 'fi-bed', title: 'Single bed' }
        ]
    ]


    return (
        <Modal
            fullscreen
            show={previewShow}
            onHide={handlePreviewClose}
        >
            <Modal.Header closeButton>
                <h3 className='h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap'>Property preview</h3>
                <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
                    {/* <Button as={Link} href='/real-estate/property-promotion' size='sm' className='me-4'>Save and continue</Button> */}
                    <span className='fs-xs text-muted ms-auto ms-sm-0 me-2'>[ESC]</span>
                </div>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <Container className='mt-2 mt-sm-0 py-4 py-sm-5'>

                    {/* Title */}
                    <h1 className='h2 mb-2'>Pine Apartments</h1>
                    <p className='mb-2 pb-1 fs-lg'>28 Jackson Ave Long Island City, NY 67234</p>
                    <ul className='d-flex mb-4 list-unstyled'>
                        <li className='me-3 pe-3 border-end'>
                            <b className='me-1'>4</b>
                            <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
                        </li>
                        <li className='me-3 pe-3 border-end'>
                            <b className='me-1'>2</b>
                            <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
                        </li>
                        <li className='me-3 pe-3 border-end'>
                            <b className='me-1'>2</b>
                            <i className='fi-car mt-n1 lead align-middle text-muted'></i>
                        </li>
                        <li>
                            <b>56 </b>
                            sq.m
                        </li>
                    </ul>

                    {/* Gallery preview */}
                    <div className='overflow-auto pb-3 px-2 mx-n2 mb-4'>
                        <Row className='row g-2 g-md-3' style={{ minWidth: '30rem' }}>
                            <Col xs={8} className='d-flex'>
                                <ImageLoader
                                    src='/images/real-estate/single/01.jpg'
                                    width={859}
                                    height={606}
                                    alt='Gallery thumbnail'
                                    className='rounded rounded-md-3'
                                />
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mb-2 mb-md-3'>
                                    <ImageLoader
                                        src='/images/real-estate/single/02.jpg'
                                        width={421}
                                        height={296}
                                        alt='Gallery thumbnail'
                                        className='rounded rounded-md-3'
                                    />
                                </div>
                                <div className='d-flex'>
                                    <ImageLoader
                                        src='/images/real-estate/single/03.jpg'
                                        width={421}
                                        height={296}
                                        alt='Gallery thumbnail'
                                        className='rounded rounded-md-3'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>

                        {/* Content */}
                        <Col md={7} className='mb-md-0 mb-4'>
                            <Badge bg='success' className='me-2 mb-3'>Verified</Badge>
                            <Badge bg='info' className='me-2 mb-3'>New</Badge>

                            {/* Price */}
                            <h2 className='h3 mb-4 pb-4 border-bottom'>
                                $2,000
                                <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/month</span>
                            </h2>

                            {/* Overview */}
                            <div className='mb-4 pb-md-3'>
                                <h3 className='h4'>Overview</h3>
                                <p className='mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                                <Collapse in={overviewOpen}>
                                    <div id='moreOverview'>
                                        <p className='mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                                    </div>
                                </Collapse>
                                <a
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setOverviewOpen(!overviewOpen)
                                    }}
                                    aria-controls='moreOverview'
                                    aria-expanded={overviewOpen}
                                    className={`collapse-label${overviewOpen ? '' : ' collapsed'}`}
                                >
                                    {overviewOpen ? 'Show less' : 'Show more'}
                                </a>
                            </div>

                            {/* Property details list */}
                            <div className='mb-4 pb-md-3'>
                                <h3 className='h4'>Property Details</h3>
                                <ul className='list-unstyled mb-0'>
                                    <li><b>Type: </b>apartment</li>
                                    <li><b>Apartment area: </b>56 sq.m</li>
                                    <li><b>Built: </b>2015</li>
                                    <li><b>Bedrooms: </b>4</li>
                                    <li><b>Bathrooms: </b>2</li>
                                    <li><b>Parking places: </b>2</li>
                                    <li><b>Pets allowed: </b>cats only</li>
                                </ul>
                            </div>

                            {/* Amenities */}
                            <div className='mb-sm-3'>
                                <h3 className='h4'>Amenities</h3>
                                <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                                    {amenitiesPreview[0].map(({ icon, title }, indx) => (
                                        <Col key={indx} as='li'>
                                            <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                                            {title}
                                        </Col>
                                    ))}
                                </Row>
                                <Collapse in={amenitiesOpen}>
                                    <div id='moreAmenities'>
                                        <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                                            {amenitiesPreview[1].map(({ icon, title }, indx) => (
                                                <Col key={indx} as='li'>
                                                    <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                                                    {title}
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Collapse>
                                <a
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setAmenitiesOpen(!amenitiesOpen)
                                    }}
                                    aria-controls='moreAmenities'
                                    aria-expanded={amenitiesOpen}
                                    className={`collapse-label${amenitiesOpen ? '' : ' collapsed'}`}
                                >
                                    {amenitiesOpen ? 'Show less' : 'Show more'}
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default Preview;