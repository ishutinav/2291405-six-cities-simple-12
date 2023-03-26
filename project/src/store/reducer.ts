import {createReducer} from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import {setActiveCity, setOffersByCity} from './action';


const initialState = {
  city: CITIES[0],
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersByCity, (state) => {
      state.offers = offers;
    });
});

export default reducer;
