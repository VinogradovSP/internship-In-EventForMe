import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';

type SortingProps = {
    query: string;
}

function Sorting({ query }: SortingProps) {
    const router = useRouter();
    function handleChoice(e: ChangeEvent<HTMLSelectElement>) {
        if (e.target.value ==="ASC") {
            query === '' ?
            router.push(`/catalog/places?ordering=average_check`)
            :
            router.push(`/catalog/places${query}&ordering=average_check`)

        } else if ( e.target.value ==="DESC" ) {
            query === '' ?
            router.push(`/catalog/places?ordering=-average_check`)
            :
            router.push(`/catalog/places${query}&ordering=-average_check`)
        } else {
            router.push('/catalog/places')
        }
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
                    <option value='ASC'>
                        Цена (от низкой к высокой)
                    </option>
                    <option value='DESC'>
                        Цена (от высокой к низкой)
                    </option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export default Sorting;