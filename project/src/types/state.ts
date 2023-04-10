import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import Offer from './offer';
import Review from './review';
import UserData from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type AppData = {
  offers: Offer[];
  offer: Offer | null;
  neighbours: Offer[];
  isOffersLoading: boolean;
  hasError: boolean;
}

export type ReviewData = {
  reviews: Review[];
  hasError: boolean;
}

export type AppProcess = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
