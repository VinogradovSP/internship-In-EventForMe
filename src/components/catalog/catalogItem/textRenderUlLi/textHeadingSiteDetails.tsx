import { FC, useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';

type descriptions = {
  description: string 
}
const description_deff: string =
  'Тип площадки: банкетный зал, веранда, гостиница/отель, летняя площадка, банкетный комплекс, терраса, загородный комплекс, шатер Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt temporibus non, magnam praesentium eum assumenda ad ex doloremque, harum, vero eveniet numquam voluptatibus. Ipsa, enim ipsum provident iure veritatis laudantium totam eum eligendi laboriosam! Dolorem quam necessitatibus, unde laudantium ut, est, assumenda quasi expedita iure maiores deleniti repellendus? Earum sequi non rerum incidunt nostrum, architecto, autem doloribus assumenda quibusdam debitis ea corporis sint dolores nihil tenetur vitae odio necessitatibus reiciendis corrupti exercitationem. Tempora, ullam eius odio dolore, neque nesciunt nihil corrupti, excepturi ex sequi cumque culpa nisi in laborum sapiente minus distinctio ducimus necessitatibus quas quis ipsum. Hic culpa iusto ducimus, ipsum labore libero. Veniam eos quasi adipisci officia assumenda, vel qui voluptatibus atque odit deleniti iusto! Quasi aliquid animi laborum repellat illo quod temporibus.';

export const TextHeadingSiteDetails:FC<descriptions> = ({description}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const new_description = description.slice(0, 128) + '...';

  return (
    <Card className={styles.text__details_container + " border-0"}>
      <Card.Body className="p-0">
        <Card.Title as="h4" className="mb-3">
          Детали площадки
        </Card.Title>
        <Card.Text
          className="mb-2"
          style={isDetailsOpen ? { display: 'none' } : {}}
        >
          {description ? new_description : description_deff.slice(0, 128) + '...'}
        </Card.Text>
        <Card.Text
          className="mb-2"
          style={!isDetailsOpen ? { display: 'none' } : {}}
        >
          {description ? description : description_deff}
        </Card.Text>
        <Card.Text
          onClick={() => setIsDetailsOpen((prev) => !prev)}
          className="mb-0 text-primary cursor-pointer"
          style={{ fontWeight: '500' }}
        >
          {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
