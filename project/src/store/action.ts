import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer';

export const setActiveCity = createAction<string>('list/setCity');

export const setOffersByCity = createAction<Offer[]>('city/setOffers');
