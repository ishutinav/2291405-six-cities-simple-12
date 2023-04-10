import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: CITIES[0],
};

export const appProcess = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {setActiveCity} = appProcess.actions;
