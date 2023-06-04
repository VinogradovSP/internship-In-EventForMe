import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@/styles/main/Main.module.scss';

type cardType = {
  title: string;
  description: string;
  pathImg: string;
};
export const Card: FC<cardType> = ({ title, description, pathImg }) => (
  <Link
    href="#"
    className="card text-decoration-none card-hover border-0 align-items-center col-lg-4 col-md-6 col-sm-12 mb-4"
    style={{ padding: '1.25rem' }}
  >
    <div className="card-body p-0 col-lg-12 col-md-10 col-sm-8">
      <h3 className="card-title mb-3">{title}</h3>
      <p className={`${styles.more_services__description} card-text mb-4`}>
        {description}
      </p>
    </div>
    <Image
      src={pathImg}
      className="rounded-2"
      alt="card image"
      width={416}
      height={415}
    />
  </Link>
);
