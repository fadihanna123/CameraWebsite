import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna
 */

const initialState = false;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
export const getLoading = (state: RootState) => state.loading;
