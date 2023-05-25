import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Container, Spinner } from "react-bootstrap";
import { Paths, URL } from '@/constant';
import styles from '@/styles/sign/Sign.module.scss';


export default function FinishRegistrationPage() {
    const router = useRouter();
    //здесь ловим динамические параметры из адресной строки
    const uid = router.query.uid as string;
    const token = router.query.token as string;
    const API = process.env.NODE_ENV === 'production'? process.env.URL : URL;

    async function sendAuthData() {
        let data = {
            uid: uid,
            token: token
        }
        let response = await fetch(`${API}auth/users/activation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
        )
        //стоит подумать о том, какие здесь м.б. обработчики ошибок. Пока что просто логирование
        if (response.ok) {
            console.log('авторизация прошла успешно');
        } else {
            console.log(response);
        }
    }

    function handleRedirect() {
        router.push(Paths.SignIn)
    }

    useEffect(() => {
        if (uid && token) {
            sendAuthData();
            handleRedirect();
        }
    }, [uid, token])

    return (
        <Container className={styles.auth__container} >
            <Spinner className={styles.auth__spinner} />
        </Container>
    )
}