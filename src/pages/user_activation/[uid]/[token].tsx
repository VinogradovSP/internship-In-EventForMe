import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Container, Spinner } from "react-bootstrap";
import { Paths, AUTH_URL } from '@/constant';

import styles from '@/styles/sign/Sign.module.scss';

export default function FinishRegistrationPage() {
  const router = useRouter();
  //здесь ловим динамические параметры из адресной строки
  const uid = router.query.uid as string;
  const token = router.query.token as string;
const API = process.env.NODE_ENV === 'production'? process.env.AUTH_URL : AUTH_URL;
        
  async function sendAuthData() {
    let data = {
      uid: uid,
      token: token,
    };
    let response = await fetch(`${API}auth/users/activation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    //стоит подумать о том, какие здесь м.б. обработчики ошибок. Пока что просто логирование
    if (response.ok) {
      console.log('авторизация прошла успешно');
      //	пример ответа
      // token: 'botg0g-15cda8c91c0218f4c1ad4687215bc817';
      // uid: 'NQ';
      handleRedirect();
    } else {
      console.error('sendAuthData', response);
    }
  }

  function handleRedirect() {
    router.push(Paths.SignIn);
  }

  useEffect(() => {
    if (uid && token) {
      sendAuthData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, token]);

  return (
    <Container className={styles.auth__container}>
      <Spinner className={styles.auth__spinner} />
    </Container>
  );
}
