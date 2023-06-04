import { useState, ChangeEvent } from "react";
import { Form, Row } from "react-bootstrap";

type DetailsTextareaProps = {
    details?: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    header: string,
    placeholder: string,
    required: boolean,
}

function DetailsTextarea({ details, handleChange, name, header, placeholder, required }: DetailsTextareaProps) {
    const [lettersLeft, setLettersLeft] = useState<number>(1000);
    function handleChangeInsideForm(e: ChangeEvent<HTMLInputElement>) {
        handleChange(e);
        setLettersLeft(1000 - e.target.value.length);
    }

    return (
        <Row className='mb-4'>
            <Form.Group controlId={ name || header }>
                {required ?
                    <Form.Label className='d-block fw-bold mb-2 mt-2 pb-1'>
                        {`${header}\u00a0`}
                        {required ? <span className='text-danger'>*</span> : null}
                    </Form.Label>
                    :
                    <Form.Label className='d-block mb-2 mt-2 pb-1'>{header}</Form.Label>
                }
                <Form.Control
                    as='textarea'
                    rows={6}
                    name={name}
                    value={details}
                    maxLength={1000}
                    placeholder={placeholder}
                    onChange={handleChangeInsideForm}
                    required={required}
                />
                <Form.Text>Осталось {lettersLeft} символов</Form.Text>
            </Form.Group>
        </Row>
    )
}

export default DetailsTextarea;