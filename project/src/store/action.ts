import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import Offer from '../types/offer';
import UserData from '../types/user-data';
import Review from '../types/review';

export const setActiveCity = createAction<string>('list/setActiveCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadOfferById = createAction<Offer>('data/loadOfferById');

export const loadNearOffers = createAction<Offer[]>('data/loadNearOffers');

export const loadReviews = createAction<Review[]>('reviews/loadReviews');

export const setNextReview = createAction<Review>('reviews/setNextReview');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const setUserData = createAction<UserData | null>('user/setUserData');
