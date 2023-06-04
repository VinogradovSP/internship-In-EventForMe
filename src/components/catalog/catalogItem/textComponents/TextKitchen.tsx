import { Button, Card } from 'react-bootstrap';
import { Kitchen } from '@/types/placeType';
import { KITCHEN } from '@/constant';
import styles from '@/styles/catalog/places/Places.module.scss';
import { makeUniversalNumberArr } from '@/components/heplers';

type TextKitchenProps = {
  children_kitchen: boolean;
  kitchens: Kitchen[] | number[];
};

function TextKitchen({ children_kitchen, kitchens }: TextKitchenProps) {
  function renderKitchens() {
    let cuisines = '';
    makeUniversalNumberArr(kitchens).forEach((kitchen) => {
      let res = KITCHEN.filter((value) => value[0] === kitchen);
      cuisines += `${res[0][1]} `;
    });
    return cuisines;
  }
  return (
    <div
      id="details"
      className={
        styles.text__cuisine_container +
        ' border-0 mb-xl-5 mb-md-4 mb-sm-3 d-flex'
      }
    >
      <Card.Body className="p-0">
        <Card.Title as="h4" className="mb-3">
          Детали о кухне площадки:
        </Card.Title>
        <Card.Text className="mb-2">
          <i className="fi-union me-2 fs-sm" />
          {renderKitchens()}
        </Card.Text>
        <Card.Text className="mb-2">
          <i className="fi-ticket me-2 fs-sm" />
          {children_kitchen ? 'Есть детское меню' : 'Детского меню нет'}
        </Card.Text>
      </Card.Body>
      <Button href="#" className={styles.text__cuisine_btn}>
        <i className="fi-file-clean me-2" />
        Запросить банкетное меню
      </Button>
    </div>
  );
}

export default TextKitchen;
