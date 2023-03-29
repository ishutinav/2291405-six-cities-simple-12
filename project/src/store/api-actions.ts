import Offer from '../types/offer';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {loadOffers, setOffersLoadingStatus} from './action';
import {APIRoute} from '../const';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
