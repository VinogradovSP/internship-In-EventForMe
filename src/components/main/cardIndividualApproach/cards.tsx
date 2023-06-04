import Image from "next/image"
import { FC } from "react"

type src = {
  src: string
}

export const CardRepetition:FC<src> = ({src}) => {
  return(    
        <figure className="card card-hover border-0 align-items-center  col-lg-3 col-md-12">
          <Image
            src={src} 
            className="rounded-2 mb-3" 
            alt="card image" 
            width={306}
            height={324}/>
          <figcaption className="card-body p-0 col-auto" >
            <p className="card-text text-primary">подпись</p>
            <h6 className="card-title">Название статьи из пяти слов</h6>
          </figcaption>
          <CardName/>
        </figure>
  )
}

export const CardName:FC = () => {
  return(
    <figure className="card card-hover border-0 align-items-center card-horizontal col-lg-12 col-md-4 col-sm-5 p-2">
        <Image  
          src="/img/card/cardsPersonServices/plug.png" 
          className="rounded-circle me-3"  
          alt="card image" 
          width={64}
          height={64}
          />
        <figcaption className="card-body p-0 col-auto" >
          <h6 className="card-title mb-2">Имя Фамилия</h6>
          <p className="card-text "><i className="fi-calendar me-2"></i>24 ноября</p>
      </figcaption>
    </figure>
  )
}