import { Row } from 'react-bootstrap';
import { Event } from '@/types/placeType';
import { EVENT } from '@/constant';
import { makeUniversalNumberArr } from '@/components/heplers';

type TextEventProps = {
  events: Event[] | number[];
};

function TextEvents({ events }: TextEventProps) {
  let eventListFirst: string[] = [];
  let eventListSecond: string[] = [];
  let eventListThird: string[] = [];

  makeUniversalNumberArr(events).forEach((event) => {
    let res = EVENT.filter((value) => value[0] === event);
    let eventName = res[0][1] as string;
    if (eventListFirst.length < 3) {
      eventListFirst.push(eventName);
    } else if (eventListSecond.length < 3) {
      eventListSecond.push(eventName);
    } else {
      eventListThird.push(eventName);
    }
  });

  function getIcon(event: string) {
    switch (event) {
      case 'Свадьба':
        return 'fi-friends';
      case 'День рождения':
        return 'fi-friends';
      case 'Новый год':
        return 'fi-bell';
      case 'Фуршет':
        return 'fi-glass';
      case 'Мальчишник':
        return 'fi-man';
      case 'Девичник':
        return 'fi-woman';
      case 'Выпускной':
        return 'fi-party-popper';
      case 'Корпоратив':
        return 'fi-briefcase';
      case 'Праздничный банкет':
        return 'fi-cake';
      default:
        return '';
    }
  }

  function renderEvents(eventList: string[]) {
    return eventList.map((event, i) => (
      <li key={i}>
        <i className={`${getIcon(event)} me-2 fs-sm`} />
        {event}
      </li>
    ));
  }

  return (
    <Row className="mb-xl-5 mb-md-4 mb-sm-3">
      <h4>Подходит для:</h4>
      <Row className="d-flex justify-content-between">
        <ul className="list-unstyled w-auto">{renderEvents(eventListFirst)}</ul>
        <ul className="list-unstyled w-auto">
          {renderEvents(eventListSecond)}
        </ul>
        <ul className="list-unstyled w-auto">{renderEvents(eventListThird)}</ul>
      </Row>
    </Row>
  );
}

export default TextEvents;
