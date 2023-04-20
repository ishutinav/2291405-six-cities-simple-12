import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { ReviewData } from '../../types/state';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';

const initialState: ReviewData = {
  reviews: [],
  hasError: false
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});
