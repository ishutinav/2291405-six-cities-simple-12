import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, CITIES } from '../const';
import Offer from '../types/offer';
import UserData from '../types/user-data';
import {loadNearOffers, loadOfferById, loadOffers, loadReviews, requireAuthorization, setActiveCity, setNextReview, setOffersLoadingStatus, setUserData} from './action';
import Review from '../types/review';

type InitialState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  offer: Offer | null;
  neighbours: Offer[];
  nextReview: Review | null;
  reviews: Review[];
}

const initialState : InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  offer: null,
  neighbours: [],
  nextReview: null,
  reviews: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.neighbours = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNextReview, (state, action) => {
      state.nextReview = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
