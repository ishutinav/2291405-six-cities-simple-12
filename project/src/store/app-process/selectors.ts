import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.Process].city;
export const getActiveOfferId = (state: State): number | null => state[NameSpace.Process].activeOfferId;
