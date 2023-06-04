import { Map, Placemark } from '@pbe/react-yandex-maps';

type YaMapProps = {
  lat: number;
  long: number;
}

function YaMap({lat, long}: YaMapProps) {
  
  const mapState = {
    center: [lat, long],
    zoom: 13,
    controls: []
  };

  return (
      <Map
        state={ mapState }
        width="100%"
        height="50vh"
      >
        <Placemark geometry={[lat, long]} />
      </Map>
  )
};

export default YaMap;