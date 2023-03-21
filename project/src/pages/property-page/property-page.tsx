import ReviewForm from '../../components/review-form/review-form';
import {AuthorizationStatus, PlaceTypes} from '../../const';
import { Link, useParams } from 'react-router-dom';
import AppSettings from '../../types/app-settings';
import Offer from '../../types/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import CardGallery from '../../components/card-gellery/card-gallery';
import {getValueByKey} from '../../common';
import CardInsideList from '../../components/card-inside-list/card-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';

import reviews from '../../mocks/reviews';

type PropertyPageProps = Omit<AppSettings, 'placesCount'>;

function PropertyPage({offers, authProps}: PropertyPageProps): JSX.Element {
  const { id } = useParams() as {id: string};
  const offer = offers.find((o) => o.id === parseInt(id, 10)) as Offer;
  const cardType = offer ? getValueByKey<PlaceTypes>(offer.type, PlaceTypes) : '';

  const selectedOfferIndex = offers.map((o)=>o.id).indexOf(parseInt(id, 10));
  const neighboringOffers = Object.assign([], offers);
  neighboringOffers.splice(selectedOfferIndex, 1);

  return offer ? (

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <CardGallery images={offer.images}/>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium &&
                  <div className="property__mark">
                    <span>{offer.isPremium && 'Premium'}</span>
                  </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${(offer.rating * 20)}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ offer.rating }</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {cardType}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} {offer?.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} {offer.maxAdults > 1 ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{ offer.price }</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <CardInsideList goods={offer.goods}/>

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  { offer.host.name }
                </span>
                <span className="property__user-status">
                  { offer.host.isPro && 'Pro' }
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>

            <section className="property__reviews reviews">
              <ReviewsList reviews={reviews}/>
              { authProps.authStatus === AuthorizationStatus.Auth && <ReviewForm />}
            </section>
          </div>
        </div>
        <Map city={offer.city} offers={neighboringOffers} classNameMap='property__map map'/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  ) : (
    <NotFoundPage>
      <b className="cities__status">404. Page not found</b>
      <Link to="/">Back to the main page</Link>
    </NotFoundPage>
  );
}

export default PropertyPage;
