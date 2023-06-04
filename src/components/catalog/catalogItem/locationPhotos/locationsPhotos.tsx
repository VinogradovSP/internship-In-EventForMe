import Image from 'next/image';
import styles from "@/styles/catalog/places/Places.module.scss";

type LocationPhotosProps = {
  photoUrls: string[],
}

function LocationPhotos({ photoUrls }: LocationPhotosProps): JSX.Element {

  function renderPhotos() {
    if (photoUrls.length >= 5) {
      return (
        <section className={styles.location__photo_container}>
          <div className={styles.location__photo_main}>
            <Image src={photoUrls[0]} alt='photo' height={400} width={635} className={styles.location__photo_main_left} />
          </div>
          <div className={styles.location__photo_column}>
            <Image src={photoUrls[1]} height={187} width={333} alt='photo' className={styles.location__photo_small} />
            <Image src={photoUrls[2]} height={187} width={333} alt='photo' className={styles.location__photo_small} />
          </div>
          <div className={styles.location__photo_column}>
            <Image src={photoUrls[3]} height={187} width={333} alt='photo' className={styles.location__photo_small_up} />
            <Image src={photoUrls[4]} height={187} width={333} alt='photo' className={styles.location__photo_small_down} />
          </div>
        </section>
      )
    }

    return (
      <section className={styles.location__photo_container}>
        <div className={styles.location__photo_main}>
          <Image src={photoUrls[0]} alt='photo' height={400} width={635} className={styles.location__photo_main_left} />
        </div>
        <div className={styles.location__photo_main}>
          <Image src={photoUrls[1] || '/img/emptyPhoto.png'} alt='photo' height={400} width={635} className={styles.location__photo_main_right} />
        </div>
      </section>
    )
  }

  return <>{renderPhotos()} </>
}

export default LocationPhotos;