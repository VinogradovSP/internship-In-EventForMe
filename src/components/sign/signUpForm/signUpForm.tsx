import {
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import {
  PASSWORD_REQUIREMENTS,
  PASSWORD_TITLE,
  FormFields,
  USERNAME_REQUIREMENTS,
  USERNAME_TITLE,
} from '@/constant';
import styles from '@/styles/sign/Sign.module.scss';
import { CreateUserData } from '@/types/forms';
import { createUser } from '@/store/user/userAPI';

type SignUpFormProps = {
  signUpForm: boolean;
  setSignUpForm: Dispatch<SetStateAction<boolean>>;
  setSignUpIsDone: Dispatch<SetStateAction<boolean>>;
  data: CreateUserData;
  setData: Dispatch<SetStateAction<CreateUserData>>;
};

export default function SignUpForm({
  signUpForm,
  setSignUpForm,
  setSignUpIsDone,
  data,
  setData,
}: SignUpFormProps): JSX.Element {
  const [validated, setValidated] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      setSignUpIsDone(true);
      setValidated(true);
      createUser(data);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <div className="page-wrapper">
      {!signUpForm ? (
        <p
          onClick={() => setSignUpForm((prev) => !prev)}
          className="text-center text-primary cursor-pointer"
        >
          Стандартная регистрация через почту
        </p>
      ) : (
        <>
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4">
            <Form
              validated={validated}
              onSubmit={handleSubmit}
              className="w-100 fw-semibold"
              method="post"
              action="#"
            >
              <Form.Group controlId="su-name" className="mb-4">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  placeholder="Введите имя пользователя"
                  required
                  name={FormFields.Username}
                  onChange={handleChange}
                  pattern={USERNAME_REQUIREMENTS}
                  title={USERNAME_TITLE}
                  type="username"
                />
              </Form.Group>
              <Form.Group controlId="su-email" className="mb-4">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="primer@mail.ru"
                  required
                  name={FormFields.Email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="su-password">
                  Пароль
                  <span className="fs-sm text-muted"> (макс. 50 символов)</span>
                </Form.Label>
                <PasswordToggle
                  id="su-password"
                  minLength="8"
                  maxLength="50"
                  required
                  size=""
                  light={false}
                  className=""
                  style={{}}
                  placeholder="Введите пароль"
                  name={FormFields.Password}
                  pattern={PASSWORD_REQUIREMENTS}
                  title={PASSWORD_TITLE}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="su-confirm-password">
                  Подтвердите пароль
                </Form.Label>
                <PasswordToggle
                  id="su-confirm-password"
                  minLength="8"
                  maxLength="50"
                  required
                  size=""
                  light={false}
                  className=""
                  style={{}}
                  placeholder="Повторите пароль"
                  name={FormFields.ConfirmPassword}
                  pattern={data.password}
                  title={'Пароли должны совпадать.'}
                  autoComplete="off"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Check
                type="checkbox"
                id="terms-agree"
                label={[
                  <span key={1}>Я согласен с </span>,
                  <Link className={styles.link} key={2} href="#">
                    Условиями пользования
                  </Link>,
                  <span key={3}> и </span>,
                  <Link className={styles.link} key={4} href="#">
                    Политикой конфиденциальности
                  </Link>,
                ]}
                required
                className="mb-4"
              />
              <Button type="submit" size="lg" variant="primary w-100">
                Зарегистрироваться
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}
