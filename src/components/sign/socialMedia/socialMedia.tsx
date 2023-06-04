import Button from 'react-bootstrap/Button';
import styles from '@/styles/sign/Sign.module.scss';
import { MouseEvent } from 'react';

export default function SocialMedia(): JSX.Element {
  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault;
  }
  return (
    <section className={styles.socialMedia}>
      <Button variant="outline-primary w-100 mb-3">
        <i className="fi-vk fs-lg me-2"></i>
        Войти через Вконтакте
      </Button>
      <Button variant="outline-primary w-100 mb-3" onClick={handleClick}>
        <i className="fi-google fs-lg me-2"></i>
        Войти через Google
      </Button>
      <Button variant="outline-primary w-100 mb-3">
        <i className="icon-yandex fs-lg me-2"></i>
        Войти через Яндекс
      </Button>

      <div className="d-flex align-items-center py-3 mb-3">
        <hr className="w-100" />
        <div className="px-3">Или</div>
        <hr className="w-100" />
      </div>
    </section>
  );
}
