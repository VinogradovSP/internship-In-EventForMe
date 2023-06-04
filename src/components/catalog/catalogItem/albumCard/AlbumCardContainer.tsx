import { OutsideReg, WelcomeZone } from '@/types/placeType';
import AlbumCard from './AlbumCard';
import React, { useEffect, useState } from 'react';

type AlbumCardContainerProps = {
  territory: string;
  welcome_zones: WelcomeZone[];
  outside_reg: OutsideReg[];
};

type DataType = {
  title: string;
  desc: string;
  img: string[];
};

export default function AlbumCardContainer({
  territory,
  welcome_zones,
  outside_reg,
}: AlbumCardContainerProps): JSX.Element {
  const [data, setData] = useState<DataType[]>([]);
  const [regPhotos, setRegPhotos] = useState<string[]>([]);
  const [welcomePhotos, setWelcomePhotos] = useState<string[]>([]);

  useEffect(() => {
    const alldata: DataType[] = [];
    if (territory && territory.length) {
      alldata.push({ title: 'Территория', desc: territory, img: [] });
    }

    if (outside_reg && outside_reg.length) {
      alldata.push({
        title: 'Выездная регистрация',
        desc: outside_reg[0].outreg_conditions,
        img: regPhotos,
      });
    }

    if (welcome_zones && welcome_zones.length) {
      alldata.push({
        title: 'Welcome-зона',
        desc: welcome_zones[0].welcome_desc,
        img: welcomePhotos,
      });
    }

    setData(alldata);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomePhotos, regPhotos]);

  useEffect(() => {
    const reg_photo = outside_reg[0]?.images_out_reg.map((img) => img.image);
    const welcome_photo = welcome_zones[0]?.images_welcome.map(
      (img) => img.image
    );

    setWelcomePhotos(welcome_photo);
    setRegPhotos(reg_photo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <AlbumCard
            id={index}
            title={item.title}
            description={item.desc}
            pathImg={item.img}
          />
        </React.Fragment>
      ))}
    </>
  );
}
