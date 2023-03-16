import ItemCard from '../item-card/item-card';
import AppSettings from '../../types/app-settings';
import { useState } from 'react';

type CardListProps = Omit<AppSettings, 'authProps'>;

function CardList({offers, placesCount}: CardListProps): JSX.Element {
  const [, setActiveCardId] = useState(0);
  const cards = offers.map((offer) => (
    <ItemCard
      key={offer.id}
      offer={offer}
      onMouseOverHandler={() => setActiveCardId(offer.id)}
      onMouseLeaveHandler={() => setActiveCardId(0)}
    />)
  );

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in Paris</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
        &nbsp;Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cards}
      </div>
    </section>
  );
}

export default CardList;
