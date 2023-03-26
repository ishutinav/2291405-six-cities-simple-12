import { useEffect, useState } from 'react';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import AppSettings from '../../types/app-settings';
import NotFoundPage from '../not-found-page/not-found-page';
import CardSortingMenu from '../../components/card-sorting-menu/card-sorting-menu';
import CityList from '../../components/city-list/city-list';
import { CITIES } from '../../const';
import { setActiveCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Offer from '../../types/offer';

const getOffersByCity = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);

const getCityForMap = (offer: Offer) => offer.city;

type MainPageProps = Omit<AppSettings, 'authProps'>;

function MainPage({offers}: MainPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const activeCity = useAppSelector((state) => state.city);

  const [currentOffers, setCurrentOffers] = useState<Offer[]>([]);
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  const hasOffersInCity = Boolean(currentOffers.length);

  const onChangeSelectedCard = (cardId: null | number) => {
    setActiveCardId(cardId);
  };

  useEffect(() => {
    const cityOffers = getOffersByCity(activeCity, offers);
    setCurrentOffers(cityOffers);

  }, [activeCity, dispatch]);

  return hasOffersInCity ? (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityList cities={CITIES} activeCity={activeCity} onCurrentCityChange={(e) => dispatch(setActiveCity(e))}/>
      <div className="cities">
        <div className="cities__places-container container">
          <CardList
            offers={currentOffers}
            sectionClassName = 'cities__places'
            listClassName = 'cities__places-list'
            onChangeSelectedCard={onChangeSelectedCard}
          >
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay in {activeCity}</b>
            <CardSortingMenu/>
          </CardList>
          <div className="cities__right-section">
            <Map city={getCityForMap(currentOffers[0])} offers={currentOffers} activeCardId={activeCardId} classNameMap={'cities__map map'}/>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <NotFoundPage>
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {}</p>
    </NotFoundPage>
  );
}

export default MainPage;
