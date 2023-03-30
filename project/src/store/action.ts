import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer';

export const setActiveCity = createAction<string>('list/setActiveCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');
