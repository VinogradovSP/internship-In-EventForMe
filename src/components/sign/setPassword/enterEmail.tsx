import {
  useState,
  FormEvent,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormFields } from '@/constant';
import { resetPassword } from '@/store/user/userAPI';

type EnterEmailProps = {
  setIsSent: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
};

export default function EnterEmail({
  setIsSent,
  setEmail,
  email,
}: EnterEmailProps): JSX.Element {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      setValidated(true);
      resetPassword(email);
      setIsSent(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} validated={validated}>
        <Form.Group controlId="rp-email" className="mb-4">
          <Form.Label style={{ fontWeight: '500' }}>
            Электронная почта
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="primer@mail.ru"
            required
            name={FormFields.Email}
            onChange={handleChange}
            value={email}
            autoComplete="off"
          />
        </Form.Group>

        <Button type="submit" size="lg" variant="primary w-100">
          Изменить пароль
        </Button>
      </Form>
    </>
  );
}
