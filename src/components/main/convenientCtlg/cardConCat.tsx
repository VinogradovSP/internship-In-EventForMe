import { cardConCat } from "@/types/cardsType";
import Link from "next/link"
import { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./convenientCatalog.module.scss";


export const CardConCat:FC<cardConCat>  = ({title, description, nameImg, color}) =>  (
  <Link href="#" className={`${styles.icon} text-decoration-none border-0 shadow ps-4 col-sm-6 col-lg-5 ms-4 rounded-3`}>
    <Button className={styles.icon_img} variant={`outline-${color} border-0 shadow`}>
      <i className={`${nameImg} fs-3`}></i>
    </Button>
    <h3 className="fs-base mt-5 mb-2">{title}</h3>
    <p className={styles.description}>{description}</p>
  </Link>
  )
