import Link from 'next/link';
import styles from '@/styles/catalog/Catalog.module.scss';


type TitleProps = {
    title: string,
    quantity: number,
}

function Title({ title, quantity }: TitleProps): JSX.Element {
    return (
        <section className={`${styles.catalog__title} my-3`}>
            <h2>{title}</h2>
            <div className={styles.catalog__title_content}>
                <div className={styles.catalog__title_text}>
                    <i className="fi-check-circle" />
                    <p>{quantity} результатов</p>
                </div>
                
                <Link href='#' className={styles.catalog__title_link}>
                    <i className="fi-map" />
                    <p>На карте</p>
                </Link>
            </div>
        </section>
    )
}

export default Title;