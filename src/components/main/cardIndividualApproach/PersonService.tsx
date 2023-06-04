import Image from 'next/image';
import { FC } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { CardName, CardRepetition } from './cards';
import { MainTitle } from '../title/title';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';

export const PersonServices: FC = () => {
  return (
    <Container
      as="section"
      className={'mx-auto w-75 pt-2 pt-sm-0 pb-md-2 ' + styles.my124}
      style={{ paddingInline: '0.2rem' }}
    >
      <MainTitle
        suptitle={'Индивидуальный подход'}
        title={'Персонализированные услуги и статьи под любой запрос'}
      />
      {/* <div
        // className="d-md-flex align-items-center justify-content-between mb-3"
				className=''
        style={{ paddingInline: '0.4rem' }}
      >
        <h2 className={styles.main__subtitle + ' h3 mb-sm-0'}>
          Статьи от свадебных экспертов и реальные свадьбы
        </h2>
        <Link
          href="#"
          style={{
            color: 'inherit',
          }}
          className="w-100 text-decoration-none"
        >
          Перейти в блог
          <i className="fi-arrow-long-right ms-2"></i>
        </Link>
      </div> */}
      <Row style={{ paddingInline: '0.4rem' }}>
        <h2 className={styles.main__subtitle + ' h3 mb-sm-0 col'}>
          Статьи от свадебных экспертов и реальные свадьбы
        </h2>
        <Link
          href="#"
          style={{
            color: 'inherit',
            textAlign: 'end',
          }}
          className="text-decoration-none col-lg-3 col-12 text-md-right"
        >
          Перейти в блог
          <i className="fi-arrow-long-right ms-2"></i>
        </Link>
      </Row>

      <Row className="mb-4 justify-content-center justify-content-lg-start">
        <CardRepetition src="/img/card/cardsPersonServices/hands.png" />

        <figure
          className={
            'card card-hover border-0 align-items-center col-lg-6 col-md-12 ' +
            styles.card
          }
          style={{ padding: '1.25rem' }}
        >
          <Image
            src="/img/card/cardsPersonServices/sky.png"
            className="rounded-2 mb-3"
            alt="card image"
            width={663}
            height={324}
          />
          <figcaption className="card-body p-0 col-lg-12 col-md-8 col-sm-11">
            <p className={'card-text text-primary ' + styles.card_sign}>
              подпись
            </p>
            <h6 className={'card-title ' + styles.card_title}>
              Длинное название статьи из шести слов
            </h6>
          </figcaption>
          <CardName />
        </figure>

        <CardRepetition src="/img/card/cardsPersonServices/flowers.png" />
      </Row>
      <Row className="mb-4 justify-content-center justify-content-lg-start">
        <figure
          className={
            'card card-hover border-0 align-items-center col-lg-6 col-sm-12 ' +
            styles.card
          }
          style={{ padding: '1.25rem' }}
        >
          <Image
            src="/img/card/cardsPersonServices/sky.png"
            className="rounded-2 mb-3"
            alt="card image"
            width={663}
            height={324}
          />
          <figcaption className="card-body p-0 col-lg-12 col-md-8 col-sm-11">
            <p className={'card-text text-primary ' + styles.card_sign}>
              подпись
            </p>
            <h6
              className={'card-title ' + styles.card_title}
              style={{ textAlign: 'center' }}
            >
              Длинное название статьи из шести слов
            </h6>
          </figcaption>
          <CardName />
        </figure>

        <CardRepetition src="/img/card/cardsPersonServices/hands.png" />
        <CardRepetition src="/img/card/cardsPersonServices/flowers.png" />
      </Row>
    </Container>
  );
};
