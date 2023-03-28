import {createReducer} from '@reduxjs/toolkit';
import {CITIES } from '../const';
import Offer from '../types/offer';
import {loadOffers, setActiveCity} from './action';

type InitialState = {
  city: string;
  offers: Offer[];
}

const initialState : InitialState = {
  city: CITIES[0],
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
