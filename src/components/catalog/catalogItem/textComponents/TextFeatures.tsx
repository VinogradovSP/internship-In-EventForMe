import { Row } from 'react-bootstrap';
import { Feature, TypePlace } from '@/types/placeType';
import { FEATURES, TERRITORY } from '@/constant';
import { makeUniversalNumberArr } from '@/components/heplers';

type TextFeaturesProps = {
  features: Feature[] | number[];
  territories: TypePlace[] | number[];
};

function TextFeatures({ features, territories }: TextFeaturesProps) {
  let featureListFirst: string[] = [];
  let featureListSecond: string[] = [];
  let featureListThird: string[] = [];

  makeUniversalNumberArr(features).forEach((feature) => {
    let res = FEATURES.filter((value) => value[0] === feature);
    let featureName = res[0][1] as string;

    if (featureListFirst.length < 3) {
      featureListFirst.push(featureName);
    } else if (featureListSecond.length < 3) {
      featureListSecond.push(featureName);
    } else {
      featureListThird.push(featureName);
    }
  });

  makeUniversalNumberArr(territories).forEach((territory) => {
    let res = TERRITORY.filter((value) => value[0] === territory);
    let territoryName = res[0][1] as string;

    if (featureListFirst.length < 3) {
      featureListFirst.push(territoryName);
    } else if (featureListSecond.length < 3) {
      featureListSecond.push(territoryName);
    } else {
      featureListThird.push(territoryName);
    }
  });

  function renderFeatures(featureList: string[]) {
    return featureList.map((feature, i) => <li key={i}> {feature} </li>);
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
}

export default TextFeatures;
