import Offer from '../../types/offer';
import {Link} from 'react-router-dom';
import {getTypePlace} from '../../common';

type ItemCardProps = {
  offer: Offer;
  onMouseOverHandler: () => void;
  onMouseLeaveHandler: () => void;
}

function ItemCard({offer, onMouseOverHandler, onMouseLeaveHandler}: ItemCardProps): JSX.Element {
  const cartType = getTypePlace(offer.type);

  return (
    <article className="cities__card place-card" onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>{offer.isPremium && 'Premium'}</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width:  `${(offer.rating * 20)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{cartType}</p>
      </div>
    </article>
  );
}

export default ItemCard;
