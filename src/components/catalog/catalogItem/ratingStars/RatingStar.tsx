import styles from "@/styles/catalog/places/Places.module.scss";
import StarRating from '../../../_finder/StarRating';

type RatingStarsProps = {
  rating: number,
  voices: number,
}

function RatingStars({ rating, voices }: RatingStarsProps) {
  return (
    <div>
    <h3 className={styles.rating__number}>{rating}</h3>
      <p className={styles.rating__stars}>
        <StarRating rating={rating}/>
      </p>
      <p className={styles.rating__text}>{voices} отзывов</p>
    </div>
  )
}

export default RatingStars;