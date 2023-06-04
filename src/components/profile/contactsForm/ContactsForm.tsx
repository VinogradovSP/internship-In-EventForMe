import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { ContactsFormData } from '@/types/forms';


function ContactsForm() {
    const initialState: ContactsFormData = {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    }
    const [userContacts, setUserContacts] = useState<ContactsFormData>(initialState);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        //здесь будет логика наполнения формы информацией, уже имеющейся в БД
    }, [])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUserContacts({ ...userContacts, [e.target.name]: e.target.value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
          setValidated(true);
          //здесь будут действия по отправке data на бэк
        }
    }

    console.log(userContacts);

    return (
        <Form
            id='contacts'
            className='card card-body border-0 shadow-sm p-4 mb-4'
            onSubmit={handleSubmit}
            validated={validated}
        >
            <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Контакты
            </h2>
            <Row>
                <Form.Group as={Col} sm={6} controlId='ab-fn' className='mb-3'>
                    <Form.Label>Имя <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        name='first_name'
                        placeholder='Введите свое имя'
                        onChange={handleChange}
                        required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-sn' className='mb-3'>
                    <Form.Label>Фамилия <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        name='last_name'
                        placeholder='Введите свою фамилию'
                        onChange={handleChange}
                        required />
                </Form.Group>

                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                    <Form.Label>Контактная электронная почта <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        name='email'
                        type='email'
                        placeholder='primer@mail.ru'
                        onChange={handleChange}
                        required />
                </Form.Group>

                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                    <Form.Label>Контактный номер телефона <span className='text-danger'>*</span></Form.Label>
                    <Form.Control
                        // @ts-expect-error: проблема совместимости со сторонней библиотекой
                        as={NumberFormat}
                        name='phone'
                        format='+7 ###-###-##-##'
                        placeholder='+7 999 999 99 99'
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>
            <Row className="flex justify-content-center m-4">
                <Button type='submit' size='lg' variant='primary d-block w-xl-25 w-lg-25 w-sm-50 w-xs-auto mb-2'>
                    Сохранить
                </Button>
            </Row>
        </Form>
    )

}

export default ContactsForm;