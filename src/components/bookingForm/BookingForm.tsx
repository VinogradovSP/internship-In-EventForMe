import { ChangeEvent, MouseEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, FormControl, FormControlProps } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '@/styles/forms/BookingForm.module.scss';
import { BookingData } from '@/types/forms';

type BookingFormProps = {
    avatar: string,
    first_name: string,
    last_name: string,
    phone: string,
    email: string,
}

function BookingForm({ avatar, first_name, last_name, phone, email }: BookingFormProps) {
    const initialBookingState: BookingData = {
        name: '',
        guests: 0,
        date: new Date(),
        comments: '',
    }
    const [booking, setBooking] = useState<BookingData>(initialBookingState);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let field = e.target.name;
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
        if (field === 'guests' && !e.target.value.match(/^[1-9]\d*$/)) {
            setBooking({
                ...booking,
                [e.target.name]: 0
            });
        }
    }

    function handleDateChange(date: Date) {
        setBooking({
            ...booking,
            date: date
        })
    }

    function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(booking);
    }
    

    return (
        <div className={styles.booking__container}>
            <div className={styles.booking__heading}>
                <h4 className={styles.booking__title}>
                    Хотите забронировать для вашей свадьбы?
                </h4>
                <Image src={avatar} width={100} height={100} alt='avatar' className={styles.booking__avatar} />
                <h4 className={styles.booking__title}>{first_name} {last_name}</h4>
                <Link href={`tel:${phone}`} className={styles.booking__link}>
                    <span><i className="fi-phone" /></span><p>{phone}</p>
                </Link>
                <Link href={`mailto:${email}`} className={styles.booking__link}>
                    <span><i className="fi-mail" /></span><p>{email}</p>
                </Link>
            </div>
            <Form className={styles.booking__form}>
                <Form.Group controlId='text-input' className='mb-3'>
                    <Form.Control
                        name='name'
                        value={booking.name}
                        placeholder='Ваше имя'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId='date-input' className='mb-3'>
                    <InputGroup>
                        <Form.Control
                            as={DatePicker}
                            selected={booking.date}
                            placeholderText="Дата мероприятия"
                            className='rounded pe-5'
                            dateFormat="dd/MM/yy"
                            onChange={(e: any) => handleDateChange(e)}
                        />
                        <i className='fi-calendar position-absolute top-50 end-0 translate-middle-y me-3'></i>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId='number-input' className='mb-3'>
                    <Form.Control
                        type='number'
                        name='guests'
                        value={booking.guests? booking.guests : ''}
                        placeholder='Количество гостей'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId='textarea-input' className='mb-3'>
                    <Form.Control
                        as='textarea'
                        rows={5}
                        name='comments'
                        value={booking.comments}
                        placeholder='Детали события, пожелания (необязательно к заполнению)'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    />
                </Form.Group>

                <Button className={styles.booking__btn} onClick={handleSubmit}>Отправить запрос </Button>
            </Form>
        </div>
    )
}

export default BookingForm;