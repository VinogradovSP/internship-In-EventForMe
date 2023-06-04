import { Row } from 'react-bootstrap';
import { Feature, TypePlace } from '@/types/placeType';
import { FEATURES, TERRITORY } from "@/constant";

type TextFeaturesProps = {
  features: Feature[];
  territories: TypePlace[];
};

function TextFeatures({ features, territories }: TextFeaturesProps) {
  let featureListFirst: string[] = [];
  let featureListSecond: string[] = [];
  let featureListThird: string[] = [];

  features.forEach(({ id }) => {
    let res = FEATURES.filter((value) => value[0] === id);
    let featureName = res[0][1] as string;
    if (featureListFirst.length < 3) {
      featureListFirst.push(featureName);
    } else if (featureListSecond.length < 3) {
      featureListSecond.push(featureName);
    } else {
      featureListThird.push(featureName);
    }
  })

  territories.forEach(({ id }) => {
    let res = TERRITORY.filter((value) => value[0] === id);
    let territoryName = res[0][1] as string;
    if (featureListFirst.length < 3) {
      featureListFirst.push(territoryName);
    } else if (featureListSecond.length < 3) {
      featureListSecond.push(territoryName);
    } else {
      featureListThird.push(territoryName);
    }
  })

  function renderFeatures(featureList: string[]) {
    return featureList.map((feature, i) => (
      <li key={i}> {feature} </li>
    ))
  }

  return (
    <Row className="mb-xl-5 mb-4">
      <h4>Особенности</h4>
      <Row className="d-flex justify-content-between">
        <ul className="list-unstyled w-auto mb-0">
          {renderFeatures(featureListFirst)}
        </ul>
        <ul className="list-unstyled w-auto mb-0">
          {renderFeatures(featureListSecond)}
        </ul>
        <ul className="list-unstyled w-auto mb-0">
          {renderFeatures(featureListThird)}
        </ul>
      </Row>
    </Row>
  );
};

export default TextFeatures;