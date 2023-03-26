type CityItemProps = {
  city: string;
  isActive: boolean;
  onCityItemClick: (city: string) => void;
}

function CityItem({city, isActive, onCityItemClick}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="/#" onClick={() => onCityItemClick(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityItem;
