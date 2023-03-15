import CardList from '../../components/card-list/card-list';
import AppSettings from '../../types/app-settings';
import NotFoundPage from '../not-found-page/not-found-page';

type MainPageProps = Omit<AppSettings, 'authProps'>;

function MainPage({offers, placesCount}: MainPageProps): JSX.Element {
  const hasOffersInCity = Boolean(offers.length);

  return hasOffersInCity ? (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
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
              <a className="locations__item-link tabs__item" href="#">
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
          <CardList offers={offers} placesCount={placesCount} />
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <NotFoundPage isNotFoundPage={false}/>
  );
}

export default MainPage;
