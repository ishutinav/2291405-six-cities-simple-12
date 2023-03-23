import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import AppSettings from '../../types/app-settings';
import NotFoundPage from '../not-found-page/not-found-page';
import cities from '../../mocks/cities';
import CardSortingMenu from '../../components/card-sorting-menu/card-sorting-menu';


type MainPageProps = Omit<AppSettings, 'authProps'>;

function MainPage({offers, placesCount}: MainPageProps): JSX.Element {
  const hasOffersInCity = Boolean(offers.length);

  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  const onChangeSelectedCard = (cardId: null | number) => {
    setActiveCardId(cardId);
  };

  return hasOffersInCity ? (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="#">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CardList
            offers={offers}
            sectionClassName = 'cities__places'
            listClassName = 'cities__places-list'
            onChangeSelectedCard={onChangeSelectedCard}
          >
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in {}</b>
            <CardSortingMenu/>
          </CardList>
          <div className="cities__right-section">
            <Map city={cities[0]} offers={offers} activeCardId={activeCardId} classNameMap={'cities__map map'}/>
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
