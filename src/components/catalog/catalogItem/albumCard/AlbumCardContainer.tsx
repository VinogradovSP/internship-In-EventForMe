import { OutsideReg, WelcomeZone } from '@/types/placeType';
import AlbumCard from './AlbumCard';
import React, { useEffect, useState } from 'react';

type AlbumCardContainerProps = {
  territory: string;
  welcome_zones: WelcomeZone[] | string | undefined;
  outside_reg: OutsideReg[] | string | undefined;
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
  let outreg_desc = '';
  let welcome_desc = '';

  if (outside_reg?.length) {
    outreg_desc =
      typeof outside_reg === 'string'
        ? outside_reg
        : outside_reg[0].outreg_conditions;
  }

  if (welcome_zones?.length) {
    welcome_desc =
      typeof welcome_zones === 'string'
        ? welcome_desc
        : welcome_zones[0].welcome_desc;
  }

  useEffect(() => {
    const alldata: DataType[] = [];
    if (territory && territory.length) {
      alldata.push({ title: 'Территория', desc: territory, img: [] });
    }

    if (outside_reg && outside_reg.length) {
      alldata.push({
        title: 'Выездная регистрация',
        desc: outreg_desc,
        img: regPhotos,
      });
    }

    if (welcome_zones && welcome_zones.length) {
      alldata.push({
        title: 'Welcome-зона',
        desc: welcome_desc,
        img: welcomePhotos,
      });
    }

    setData(alldata);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomePhotos, regPhotos]);

  useEffect(() => {
    let reg_photo: string[] = [];
    let welcome_photo: string[] = [];

    if (outside_reg !== undefined && typeof outside_reg !== 'string') {
      reg_photo = outside_reg[0]?.images_out_reg.map((img) => img.image);
    }

    if (welcome_zones !== undefined && typeof welcome_zones !== 'string') {
      welcome_photo = welcome_zones[0]?.images_welcome.map((img) => img.image);
    }

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
