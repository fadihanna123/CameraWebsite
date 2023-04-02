import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
export const getLang = (state: RootState) => state.lang;
