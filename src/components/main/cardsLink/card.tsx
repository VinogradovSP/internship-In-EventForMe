import styles from "../../../styles/main/cardsLink.module.css";
import Image from "next/image"

type cardType = {
  title: string,
  description: string,
  pathImg: string
}

export const Card  = ({title, description, pathImg}: cardType) =>  (
    <figure className="card align-items-center col-lg-4 col-md-6 col-sm-12">
      <figcaption className="card-body  col-md-12 col-sm-7" >
        <h4 className={styles.p}>{title}</h4>
        <p className="card-text">{description}</p>
      </figcaption>
      <Image  
        src={pathImg} 
        className="rounded-2" 
        alt="card image" 
        width={416}
        height={415}/>
    </figure>
  )