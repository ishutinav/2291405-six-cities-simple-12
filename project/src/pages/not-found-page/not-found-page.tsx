import CityList from '../../components/city-list/city-list';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';

type Props = { children: string | JSX.Element | JSX.Element[]}

function NotFoundPage({children} : Props): JSX.Element {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector((state) => state.city);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <CityList cities={CITIES} activeCity={activeCity} onCurrentCityChange={(e) => dispatch(setActiveCity(e))}/>
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
