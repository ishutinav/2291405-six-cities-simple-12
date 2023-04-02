import ReviewForm from '../../components/review-form/review-form';
import {AuthorizationStatus, PlaceTypes} from '../../const';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import CardGallery from '../../components/card-gellery/card-gallery';
import {getValueByKey} from '../../common';
import CardInsideList from '../../components/card-inside-list/card-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearOffersAction, fetchOfferByIdAction, fetchReviewsAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import Offer from '../../types/offer';


function PropertyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams() as {id: string};
  const hotelId = parseInt(id, 10);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [neighboringOffers, setNeighboringOffers] = useState<Offer[]>([]);

  useEffect(() => {
    dispatch(fetchOfferByIdAction({ id : hotelId }));
    dispatch(fetchNearOffersAction({ id : hotelId }));
    dispatch(fetchReviewsAction({ id : hotelId }));
  }, [id]);

  const offer = useAppSelector((state) => state.offer);
  useEffect(() => {
    setCurrentOffer(offer);
  }, [offer, dispatch]);

  const neighbours = useAppSelector((state) => state.neighbours);
  useEffect(() => {
    setNeighboringOffers(neighbours);
  }, [neighbours, dispatch]);


  const cardType = currentOffer ? getValueByKey<PlaceTypes>(currentOffer.type, PlaceTypes) : '';

  return currentOffer ? (

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <CardGallery images={currentOffer.images}/>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer.isPremium &&
                  <div className="property__mark">
                    <span>{currentOffer.isPremium && 'Premium'}</span>
                  </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer.title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${(currentOffer.rating * 20)}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ currentOffer.rating }</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {cardType}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer.bedrooms} {currentOffer?.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="property__feature property__feature--adults">
                Max {currentOffer.maxAdults} {currentOffer.maxAdults > 1 ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{ currentOffer.price }</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <CardInsideList goods={currentOffer.goods}/>

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  { currentOffer.host.name }
                </span>
                <span className="property__user-status">
                  { currentOffer.host.isPro && 'Pro' }
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {currentOffer.description}
                </p>
              </div>
            </div>

            <section className="property__reviews reviews">
              <ReviewsList />
              { authStatus === AuthorizationStatus.Auth && <ReviewForm />}
            </section>
          </div>
        </div>
        <Map city={currentOffer.city} offers={neighboringOffers} currentOffer={currentOffer} activeCardId={ null } classNameMap='property__map map'/>
      </section>

      <div className="container">
        <CardList
          offers={neighboringOffers}
          sectionClassName = 'near-places'
          listClassName = 'near-places__list'
          onChangeSelectedCard = {(e)=> e}
        >
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        </CardList>
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
