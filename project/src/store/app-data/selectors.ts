import {NameSpace} from '../../const';
import Offer from '../../types/offer';
import {State} from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
export const getNeighbours = (state: State): Offer[] => state[NameSpace.Data].neighbours;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersLoading;
