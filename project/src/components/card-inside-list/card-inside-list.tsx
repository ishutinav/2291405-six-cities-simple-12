import CardInsideListItem from '../card-inside-list-item/card-inside-list-item';

type CardInsideListProps = {
  goods: string[];
}

function CardInsideList({goods}: CardInsideListProps): JSX.Element {

  const cardInsideListItems = goods.map((good) => (
    <CardInsideListItem key={good} good={good} />
  ));

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        { cardInsideListItems }
      </ul>
    </div>
  );
}

export default CardInsideList;
