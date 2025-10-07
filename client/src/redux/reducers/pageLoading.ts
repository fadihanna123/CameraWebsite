import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna
 */

const initialState: boolean = true;

export const pageLoadingSlice = createSlice({
  name: 'pageLoading',
  initialState,
  reducers: {
    setPageLoading: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setPageLoading } = pageLoadingSlice.actions;
export default pageLoadingSlice.reducer;
export const getPageLoading = (state: RootState) => state.pageLoading;
