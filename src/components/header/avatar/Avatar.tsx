import React from 'react';
import Image from 'next/image';
import styles from '@/styles/header/Avatar.module.scss';
import { Paths } from '@/constant';

type AvatarProps = {
  name?: string;
  surname?: string;
  avatar?: string;
  is_bride?: boolean;
};

function Avatar({ is_bride, name, surname, avatar }: AvatarProps) {
  let path = Paths.Home;
  //на тот случай, если путь к ЛК будет меняться в зависимости от роли
  // switch (is_bride) {
  //   case true:
  //     path = '#';
  //     break;
  //   case false:
  //     path = '#';
  //     break;
  // }

  return (
    <a href={path} className={styles.avatar__link}>
      <Image
        className={styles.avatar__image}
        src={avatar || '/img/header/avatar.svg'}
        width={40}
        height={40}
        alt="avatar"
      />
      <p className={styles.avatar__name}>
        {name || 'Джейн'}&nbsp;{surname || 'Доу'}
      </p>
    </a>
  );
}

export default Avatar;
