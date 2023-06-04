import { MouseEvent } from 'react';
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { Place } from "@/types/catalog";
import styles from "@/styles/main/Main.module.scss";

type LocationProps = {
    locations: Place[],
    title: string,
}

export function Locations({ locations, title }: LocationProps): JSX.Element {

    function renderLocations() {
        return locations.map((location: Place, index: number) => (
            <div className={`${styles.locations_wrapper} card-hover shadow-sm ${index === 0 ? styles.locations_wrapper_1 : ''}`} key={index}>
                <Link href={`catalog/places/${location.id}`} className={styles.locations__overlay}>
                    <div className={styles.overlay_wrapper}>
                        <div className={`${styles.locations__description} pb-3 ps-3`}>
                            <h3 className={`${styles.description__title} mb-1`}>{location.title}</h3>
                            <div className={`${styles.description__text} fs-sm opacity-70`}>
                                <div className="d-flex align-items-center my-1">
                                    <i className={`${styles.description__star} fi-star-filled me-1`}></i>
                                    <p><span className={styles.fw_bold}>{location.rating.rating}</span>
                                        {' '}({location.rating.votes})</p>
                                </div>
                                <div className="d-flex align-items-center my-1">
                                    <i className={`fi-map-pin me-1`}></i>
                                    <p>{location.address.full}</p>
                                </div>
                                <div className="d-flex align-items-center my-1">
                                    <i className={`fi-credit-card me-1`}></i>
                                    <p className={styles.fw_bold}>от {location.min_price} ₽</p>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.locations__icon_wrapper} pt-3 pe-3`}>
                            <button type="button"
                                className={`${styles.locations__icon} btn btn-icon btn-light btn-xs rounded-circle`}
                                onClick={addToFav}
                            >
                                <i className="fi-heart" />
                            </button>
                        </div>
                    </div>
                </Link>
                <img src={location.image_vendor} alt={location.title} />
            </div>
        ))
    }

    function addToFav(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log('Добавлено в избранное');

    }

    return (
        <Container as='section' className="mx-auto w-75">
            <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h3 className={styles.main__subtitle + ' h3 mb-sm-0'}>{title}</h3>
                </div>
                <div className={styles.grid}>
                    {locations ? renderLocations() : "Loading"}
                </div>
            </section>
        </Container>
    )
}