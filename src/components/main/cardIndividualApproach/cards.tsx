import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/main/Main.module.scss';

type src = {
  src: string;
};

export const CardRepetition: FC<src> = ({ src }) => {
  return (
    <figure
      className={
        'card card-hover align-items-center border-0 col-lg-3 col-md-6 ' +
        styles.card
      }
      style={{ padding: '1.25rem' }}
    >
      <Image
        src={src}
        className="rounded-2 mb-3"
        alt="card image"
        width={306}
        height={324}
      />
      <figcaption className="card-body p-0 col-auto">
        <p className={'card-text text-primary ' + styles.card_sign}>подпись</p>
        <h6 className={'card-title ' + styles.card_title}>
          Название статьи из пяти слов
        </h6>
      </figcaption>
      <CardName />
    </figure>
  );
};

export const CardName: FC = () => {
  return (
    <figure className="card border-0 align-items-center card-horizontal col-12 col-md-8 col-lg-12 my-2">
      <Image
        src="/img/card/cardsPersonServices/plug.png"
        className="rounded-circle me-3"
        alt="card image"
        width={64}
        height={64}
      />
      <figcaption className="card-body p-0 col-auto">
        <h6 className={`card-title my-2 text-start`}>Имя Фамилия</h6>
        <p className={'card-text ' + styles.card_sign}>
          <i className="fi-calendar me-2"></i>24 ноября
        </p>
        {/* >>>>>>> main-and-place-adaptive */}
      </figcaption>
    </figure>
  );
};
