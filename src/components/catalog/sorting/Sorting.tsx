import { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

type SortingProps = {
    sortingCB: (param: string) => void;
}

function Sorting({ sortingCB }: SortingProps) {

    function handleChoice(e: ChangeEvent<HTMLSelectElement>) {
        sortingCB(e.target.value);
    }

    return (
        <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
            <Form.Group controlId='sortby' className='d-flex align-items-center flex-shrink-0'>
                <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                    <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                    Сортировать по:
                </Form.Label>
                <Form.Select size='sm' onChange={handleChoice}>
                    <option value='none'>-----</option>
                    <option value='popularity'>Популярности</option>
                    <option value='lowPrice'>Цена (от низкой к высокой)</option>
                    <option value='hightPrice'>Цена (от высокой к низкой)</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export default Sorting;