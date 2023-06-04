import { Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

function YaMap() {
  const [addressCoord, setAddressCoord] = useState();
  const mapState = {
    center: [55.684758, 37.738521],
    zoom: 13,
    controls: []
  };

  useEffect(()=> {

  //   const name = '';
  //   ymaps.geocode(name).then((result) => {
  //     const coord = result.geoObjects.get(0).geometry.getCoordinates();
  //     setAddressCoord(coord);
  
  }, [])
 


  return (
      <Map
        state={
          addressCoord ? { ...mapState, center: addressCoord } : mapState
        }
        width="100%"
        height="50vh"
      >
         {/* {addressCoord && <Placemark geometry={addressCoord} />} */}
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
  )
};

export default YaMap;