import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { PASSWORD_REQUIREMENTS, PASSWORD_TITLE, formFields, PATHS } from '@/constant';
import styles from '@/styles/sign/Sign.module.scss';
import { SigninUserData } from '@/types/forms';
import { signinUser } from '@/store/user/userAPI';

export default function SignInForm(): JSX.Element {
  const [validated, setValidated] = useState(false);
  const initialDataState: SigninUserData = {
    role: 'bride',
    email: '',
    password: '',
  };
  const [data, setData] = useState<SigninUserData>(initialDataState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      signinUser(data);
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <Form
      validated={validated}
      onSubmit={handleSubmit}
      style={{ marginLeft: '5rem' }}
      method="post"
      action="#"
    >
      <Form.Group controlId="su-radio" className="mb-4">
        <ButtonGroup
          className="w-100"
          size="lg"
          style={{ position: 'relative' }}
        >
          <ToggleButton
            type="radio"
            id="bride"
            name={formFields.role}
            value="bride"
            checked={data.role === 'bride'}
            onChange={handleChange}
            variant="outline-primary fw-normal"
            className={styles.toggle_btn}
          >
            <i className="fi-user fs-lg me-1"></i>
            <span className={styles.toggle_btn}>Я пользователь</span>
          </ToggleButton>
          <Form.Control
            required
            defaultValue={data.role}
            style={{ position: 'absolute', zIndex: '-1' }}
          />
          <ToggleButton
            type="radio"
            id="vendor"
            name={formFields.role}
            value="vendor"
            checked={data.role === 'vendor'}
            onChange={handleChange}
            variant="outline-primary fw-normal"
          >
            <i className="fi-briefcase fs-lg me-1"></i>
            <span className={styles.toggle_btn}>Я поставщик</span>
          </ToggleButton>
        </ButtonGroup>
      </Form.Group>
      <Form.Group controlId="si-email" className="mb-4">
        <Form.Label style={{ fontWeight: '500' }}>Электронная почта</Form.Label>
        <Form.Control
          type="email"
          placeholder="primer@mail.ru"
          required
          name={formFields.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Form.Label
            htmlFor="si-password"
            className="mb-0"
            style={{ fontWeight: '500' }}
          >
            Пароль
          </Form.Label>
          <Link href={PATHS.renew} className={styles.link + ' fs-sm'}>
            Забыли пароль?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Введите пароль"
          name={formFields.password}
          onChange={handleChange}
          required
          style={{}}
          light={false}
          className=""
          size=""
          autoComplete="off"
          pattern={PASSWORD_REQUIREMENTS}
          title={PASSWORD_TITLE}
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Войти на портал
      </Button>
    </Form>
  );
}
