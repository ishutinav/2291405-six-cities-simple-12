import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AppData} from '../../types/state';
import {fetchNearOffersAction, fetchOfferByIdAction, fetchOffersAction} from '../api-actions';

const initialState: AppData = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  neighbours: [],
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.neighbours = action.payload;
      });
  }
});
