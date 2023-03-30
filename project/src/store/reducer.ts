import {createReducer} from '@reduxjs/toolkit';
import {CITIES } from '../const';
import Offer from '../types/offer';
import {loadOffers, setActiveCity, setOffersLoadingStatus} from './action';

type InitialState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
}

const initialState : InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export default reducer;
