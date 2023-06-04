import Button from "react-bootstrap/Button";
import Link from "next/link";
import styles from "@/styles/main/Main.module.scss";

function RegisterBtn () {
    return (
        <Button size='lg' onClick={() => { }}>
            <Link href='#' className={styles.btn__link}>
                {'Регистрация\u00A0'}<img src='/img/arrow.png' />
            </Link>
        </Button>
    )
}

export default RegisterBtn;