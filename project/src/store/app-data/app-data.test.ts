import { CITIES } from '../../const';
import { AppData } from '../../types/state';
import { makeFakeOffer, makeFakeOffers } from '../../utils/mocks';
import { fetchNearOffersAction, fetchOfferByIdAction, fetchOffersAction } from '../api-actions';
import { appData, setActiveCity, setActiveOfferId } from './app-data';

const fakeOffers = makeFakeOffers();
const getModifiedState = (state: AppData) => JSON.parse(JSON.stringify(state)) as AppData;

describe('Reducer: appData', () => {
  let initialState: AppData;
  beforeEach(() => {
    initialState = {
      city: CITIES[0],
      offers: [],
      isOffersLoading: false,
      offer: null,
      neighbours: [],
      activeOfferId: null,
      hasError: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(
        initialState
      );
  });

  it('should update offers by load offers', () => {
    const modifiedState = getModifiedState(initialState);
    modifiedState.offers = fakeOffers;
    expect(appData.reducer(initialState, {type: fetchOffersAction.fulfilled.type, payload: fakeOffers}))
      .toEqual(modifiedState);
  });

  it('should update offer by load offer by Id', () => {
    const fakeOffer = makeFakeOffer();
    const modifiedState = getModifiedState(initialState);
    modifiedState.offer = fakeOffer;
    expect(appData.reducer(initialState, {type: fetchOfferByIdAction.fulfilled.type, payload: fakeOffer}))
      .toEqual(modifiedState);
  });

  it('should has error by load offer by Id', () => {
    const modifiedState = getModifiedState(initialState);
    modifiedState.hasError = true;
    expect(appData.reducer(initialState, {type: fetchOfferByIdAction.rejected.type}))
      .toEqual(modifiedState);
  });

  it('should update neighbours by load near by offers', () => {
    const modifiedState = getModifiedState(initialState);
    modifiedState.neighbours = fakeOffers;
    expect(appData.reducer(initialState, {type: fetchNearOffersAction.fulfilled.type, payload: fakeOffers}))
      .toEqual(modifiedState);
  });

  it('should update city', () => {
    const modifiedState = getModifiedState(initialState);
    modifiedState.city = CITIES[2];
    expect(appData.reducer(initialState, {type: setActiveCity.type, payload: CITIES[2]}))
      .toEqual(modifiedState);

  });

  it('should update activeOfferId', () => {
    const modifiedState = getModifiedState(initialState);
    modifiedState.activeOfferId = 5;
    expect(appData.reducer(initialState, {type: setActiveOfferId.type, payload: 5}))
      .toEqual(modifiedState);

  });
});
