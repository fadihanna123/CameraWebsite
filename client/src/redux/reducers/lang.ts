import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const initialState = '';

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
export const getLang = (state: RootState) => state.lang;
