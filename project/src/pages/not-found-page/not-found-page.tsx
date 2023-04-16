import CityList from '../../components/city-list/city-list';

type Props = { children: string | JSX.Element | JSX.Element[]}

function NotFoundPage({children} : Props): JSX.Element {

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <CityList />
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              {children}
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
