import ItemCard from '../item-card/item-card';
import Offer from '../../types/offer';
import { useEffect, useState } from 'react';
import CardSortingMenu from '../card-sorting-menu/card-sorting-menu';


type CardListProps = {
  offers: Offer[];
  placesCount: number;
  onChangeSelectedCard: (cardId: null | number) => void;
}

function CardList({offers, placesCount, onChangeSelectedCard}: CardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  const cards = offers.map((offer) => (
    <ItemCard
      key={offer.id}
      offer={offer}
      onMouseOverHandler={() => setActiveCardId(offer.id)}
      onMouseLeaveHandler={() => setActiveCardId(null)}
    />)
  );

  useEffect(() => {
    onChangeSelectedCard(activeCardId);
  }, [activeCardId]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in {}</b>
      <CardSortingMenu/>
      <div className="cities__places-list places__list tabs__content">
        {cards}
      </div>
    </section>
  );
}

export default CardList;
