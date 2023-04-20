import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/app-data/app-data';
import { getCurrentCity } from '../../store/app-data/selectors';
import CityItem from '../city-item/city-item';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCurrentCity);

  const CityItems = CITIES.map((city) => (
    <CityItem
      key={city}
      city={city}
      isActive={ activeCity === city }
      onCityItemClick={() => dispatch(setActiveCity(city))}
    />
  ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CityItems}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
