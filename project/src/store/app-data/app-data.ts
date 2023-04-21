import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {AppData} from '../../types/state';
import {fetchNearOffersAction, fetchOfferByIdAction, fetchOffersAction} from '../api-actions';

const initialState: AppData = {
  city: CITIES[0],
  offers: [],
  isOffersLoading: false,
  offer: null,
  neighbours: [],
  activeOfferId: null,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<number | null>) => {
      state.activeOfferId = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
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
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.hasError = false;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.neighbours = action.payload;
      });
  }
});

export const {setActiveCity, setActiveOfferId, setHasError} = appData.actions;
