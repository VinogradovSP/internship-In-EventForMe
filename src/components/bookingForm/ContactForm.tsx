import { ChangeEvent, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/forms/ContactForm.module.scss';


function ContactForm() {
    const [phone, setPhone] = useState<string>('');
    const [placeholder, setPlaceholder]= useState<string>('Введите номер');;

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setPhone(event.target.value);
    }

    function handleSubmit () {
        if (phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
            console.log (phone);
        } else {
            setPhone('');
            setPlaceholder('Неверный формат');
        }
    }

    return (<div className={styles.contactform__container}>
        <h4>Отправьте запрос на звонок и&nbsp;узнайте детали о площадке</h4>
        <InputGroup size='sm' className='d-none d-lg-flex flex-nowrap'>
            <div className={styles.input__frame}>
                <i className='fi-phone position-absolute text-muted top-50 translate-middle-y ps-1 ms-2'></i>
                <Form.Control
                    className={"border-top-0 border-start-0 border-end-0 border-bottom-0 rounded-0 form-control " + styles.input__field}
                    type='tel'
                    value={phone}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
            <Button className={styles.input__btn} onClick={handleSubmit}>Отправить</Button>
        </InputGroup>
    </div>
    )
}

export default ContactForm;