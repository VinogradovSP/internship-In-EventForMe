import { Dispatch, SetStateAction } from 'react';
import FileUploader from '../fileUploader/FileUploader';
import { ADD_PLACE_NAMES } from '@/constant';

type MainPhotosProps = {
  setMainPhotos: Dispatch<SetStateAction<string[]>>;
};

function MainPhotos({ setMainPhotos }: MainPhotosProps) {
  return (
    <section
      id={ADD_PLACE_NAMES.mainPhotos.id}
      className="card card-body border-0 shadow-sm p-4 mb-4"
    >
      <h2 className="h4 mb-4">
        <i className="fi-image text-primary fs-5 mt-n1 me-2"></i>
        {ADD_PLACE_NAMES.mainPhotos.name}
      </h2>
      <FileUploader
        setGallery={setMainPhotos}
        maxFiles={5}
        required={true}
        warning={
          'Макс. размер фото 5 МБ. Форматы: jpeg, jpg, png. Не более 5 фотографий. Сначала загрузите обложку.'
        }
      />
    </section>
  );
}

export default MainPhotos;