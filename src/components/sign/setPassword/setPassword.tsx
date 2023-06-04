import { useState, FormEvent, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import PasswordToggle from '@/components/_finder/PasswordToggle';
import Button from 'react-bootstrap/Button';
import {
  PASSWORD_REQUIREMENTS,
  PASSWORD_TITLE,
  FormFields,
  Paths,
} from '@/constant';
import { PasswordFromData } from '@/types/forms';
import { useRouter } from 'next/router';
import { resetPasswordConfirm } from '@/store/user/userAPI';

export default function SetPassword(): JSX.Element {
  const router = useRouter();
  //здесь ловим динамические параметры из адресной строки
  const uid = router.query.uid as string;
  const token = router.query.token as string;

  function handleRedirect() {
    router.push(Paths.SignIn);
  }

  const [validated, setValidated] = useState(false);

  const initialDataState: PasswordFromData = {
    password: '',
    confirmPassword: '',
  };
  const [data, setData] = useState<PasswordFromData>(initialDataState);
  const requestData = {
    uid,
    token,
    new_password: data.password,
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      setValidated(true);
      resetPasswordConfirm(requestData);
      handleRedirect();
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        className="w-100 fw-semibold"
      >
        <Form.Group className="mb-4">
          <Form.Label htmlFor="password">
            Введите новый пароль
            <span className="fs-sm text-muted"> (макс. 50 символов)</span>
          </Form.Label>
          <PasswordToggle
            id="reset-password"
            minLength="8"
            maxLength="50"
            required
            size=""
            light={false}
            className=""
            style={null}
            autoComplete="off"
            placeholder="Введите пароль"
            pattern={PASSWORD_REQUIREMENTS}
            title={PASSWORD_TITLE}
            onChange={handleChange}
            name={FormFields.Password}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="confirm-password">Подтвердите пароль</Form.Label>
          <PasswordToggle
            id="confirm-password"
            minLength="8"
            maxLength="50"
            required
            size=""
            light={false}
            className=""
            style={null}
            autoComplete="off"
            name={FormFields.ConfirmPassword}
            placeholder="Повторите пароль"
            pattern={data.password}
            title={'Пароли должны совпадать.'}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" size="lg" variant="primary w-100">
          Сохранить изменения
        </Button>
      </Form>
    </>
  );
}
