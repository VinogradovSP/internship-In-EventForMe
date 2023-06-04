import Hero from '@/components/main/hero/Hero';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import SupplierSlider from '@/components/main/supplierSlider/supplierSlider';
import MoreServices from '@/components/main/moreServices/moreServices';
import { Locations } from '@/components/main/locations/locations';
import { ConvenientCatalog } from '@/components/main/convenientCtlg/convenientCatalog';
import { PersonServices } from '@/components/main/cardIndividualApproach/PersonService';
import { CardsLink } from '@/components/main/cardsLink/cardsLink';
import { LocationCard } from '@/types/locationCard';
import { mockLocationCards } from '@/mocks/locationCards';

type HomeProps = {
  topLocations: LocationCard[];
};

export default function Home({ topLocations = mockLocationCards }: HomeProps) {
  return (
    <>
      <Hero />
      <CardsLink />
      <ConvenientCatalog />
      <Locations
        locations={topLocations}
        title={'ТОП-5 площадок разных категорий г. Москва'}
        isShowAll={false}
      />
      <MoreServices />
      <SupplierSlider />
      <Locations
        locations={topLocations}
        title={'Лучшие локации'}
        isShowAll={true}
        showAllTxt="Показать все"
      />
      <PersonServices />
      <SupplierCard />
      <PlanWeddingCard />
    </>
  );
}

// Здесь должен быть запрос на URL с топовыми площадками.
// Пока соотв. API нет, используем мок-массив.
// export const getServerSideProps = async () => {
//   const API = process.env.NODE_ENV === 'production' ? process.env.URL : URL;
//   const response = await fetch(`${API}`);
//   const result: LocationCard[] = await response.json();
//   const locations: LocationCard[] = result?.slice(0, 5);

//   if (!locations) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { topLocations: locations },
//   };
// };
