import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
export const getLoading = (state: RootState) => state.loading;
