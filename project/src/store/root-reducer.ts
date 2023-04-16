import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import { appData } from './app-data/app-data';
import { reviewData } from './review-data/review-data';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Process]: appProcess.reducer,
});
