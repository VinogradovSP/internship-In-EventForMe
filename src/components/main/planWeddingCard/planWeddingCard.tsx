import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';
import { MainTitle } from '@/components/main/title/title';

function PlanWeddingCard() {
  return (
    <section className={styles.my124}>
      <Container as="section">
        <MainTitle
          suptitle={'Портал EventForMe'}
          title={
            'Организуйте свадьбу с нашей помощью и создайте воспоминания на всю жизнь'
          }
        >
          <Button size="lg">
            <Link href="#" className={styles.btn__link}>
              Начать планирование
            </Link>
          </Button>
        </MainTitle>
      </Container>
    </section>
  );
}

export default PlanWeddingCard;
