import { Row } from 'react-bootstrap';
import { TypePlace } from '@/types/placeType';
import { TERRITORY } from "@/constant";

type TextTerritoryProps = {
  territories: TypePlace[];
};

function TextTerritory({ territories }: TextTerritoryProps) {
  let territoryListFirst: string[] = [];
  let territoryListSecond: string[] = [];
  let territoryListThird: string[] = [];

  territories.forEach(({ id }) => {
    let res = TERRITORY.filter((value) => value[0] === id);
    let territoryName = res[0][1] as string;
    if (territoryListFirst.length < 3) {
      territoryListFirst.push(territoryName);
    } else if (territoryListSecond.length < 3) {
      territoryListSecond.push(territoryName);
    } else {
      territoryListThird.push(territoryName);
    }
  })

  function renderTerritory(territoryList: string[]) {
    return territoryList.map((feature, i) => (
      <li key={i}> {feature} </li>
    ))
  }

  return (
    <Row className="mb-xl-5 mb-4">
      <h4>На территории</h4>
      <Row className="d-flex justify-content-between">
        <ul className="list-unstyled w-auto mb-0">
          {renderTerritory(territoryListFirst)}
        </ul>
        <ul className="list-unstyled w-auto mb-0">
          {renderTerritory(territoryListSecond)}
        </ul>
        <ul className="list-unstyled w-auto mb-0">
          {renderTerritory(territoryListThird)}
        </ul>
      </Row>
    </Row>
  );
};

export default TextTerritory;