import Offer from '../../types/offer';
import { useEffect, useState } from 'react';
import CardItem from '../card-item/card-item';


type CardListProps = {
  offers: Offer[];
  sectionClassName: string;
  listClassName: string;
  children: string | JSX.Element | JSX.Element[];
  onChangeSelectedCard: (cardId: null | number) => void;
}

function CardList({offers, sectionClassName, listClassName, children, onChangeSelectedCard}: CardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);

  const cards = offers.map((offer) => (
    <CardItem
      key={offer.id}
      offer={offer}
      componentClassName= {sectionClassName.includes('near') ? 'near-places__' : 'cities__'}
      onMouseOverHandler={() => setActiveCardId(offer.id)}
      onMouseLeaveHandler={() => setActiveCardId(null)}
    />
  ));

  useEffect(() => {
    onChangeSelectedCard(activeCardId);
  }, [activeCardId]);

  return (
    <section className={`${sectionClassName} places`}>
      {children}
      <div className={`${listClassName} places__list tabs__content`}>
        {cards}
      </div>
    </section>
  );
}

export default CardList;
