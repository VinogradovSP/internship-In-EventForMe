import { MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Paths } from '@/constant';
import styles from '@/styles/header/RegButton.module.scss';

function RegButton() {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
  }

  return (
    <Button variant="primary" onClick={handleClick} className={styles.regbtn}>
      <Link href={Paths.SignUp} className={styles.regbtn__text}>
        Регистрация
        <Image
          src="/img/header/arrowRight.png"
          alt="arrow"
          width={6}
          height={12}
        />
      </Link>
    </Button>
  );
}

export default RegButton;
