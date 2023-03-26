import CityItem from '../city-item/city-item';

type CityListProps = {
  cities: string[];
  activeCity: string;
  onCurrentCityChange: (city: string) => void;
}

function CityList({cities, activeCity, onCurrentCityChange}: CityListProps): JSX.Element {
  const CityItems = cities.map((city) => (
    <CityItem
      key={city}
      city={city}
      isActive={ activeCity === city }
      onCityItemClick={onCurrentCityChange}
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
