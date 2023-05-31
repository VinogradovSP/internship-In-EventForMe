import { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';

type TextHeadingSiteDetailsProps = {
  description: string;
};

export const TextHeadingSiteDetails = ({
  description,
}: TextHeadingSiteDetailsProps): JSX.Element => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const new_description = description.slice(0, 128) + '...';

  return (
    <Card className="border-0 mb-xl-5 mb-4">
      <Card.Body className="p-0">
        <Card.Title as="h4" className="text-center text-sm-start mb-3">
          Детали площадки
        </Card.Title>
        {description.length > 128 ? (
          <>
            <Card.Text
              className="mb-2 text-center text-sm-start "
              style={isDetailsOpen ? { display: 'none' } : {}}
            >
              {new_description}
            </Card.Text>
            <Card.Text
              className="mb-2 text-center text-sm-start "
              style={!isDetailsOpen ? { display: 'none' } : {}}
            >
              {description}
            </Card.Text>
            <Card.Text
              onClick={() => setIsDetailsOpen((prev) => !prev)}
              className="mb-0 text-primary cursor-pointer"
              style={{ fontWeight: '500' }}
            >
              {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
            </Card.Text>
          </>
        ) : (
          <Card.Text className="mb-2 text-center text-sm-start ">
            {description}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};
