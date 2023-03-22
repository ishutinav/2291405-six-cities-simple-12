import Offer from '../../types/offer';
import {Link} from 'react-router-dom';
import {getValueByKey} from '../../common';
import { PlaceTypes } from '../../const';


type ItemCardProps = {
  offer: Offer;
  componentClassName: string;
  onMouseOverHandler: () => void;
  onMouseLeaveHandler: () => void;
}

function CardItem({offer, componentClassName, onMouseOverHandler, onMouseLeaveHandler}: ItemCardProps): JSX.Element {
  const offerUrl = `/offer/${offer.id.toString()}`;

  return (
    <article className={`${componentClassName}card place-card`} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>{offer.isPremium && 'Premium'}</span>
        </div>}
      <div className={`${componentClassName}image-wrapper place-card__image-wrapper`}>
        <Link to={offerUrl}>
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
            <span style={{ width:  `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{getValueByKey<PlaceTypes>(offer.type, PlaceTypes)}</p>
      </div>
    </article>
  );
}

export default CardItem;
