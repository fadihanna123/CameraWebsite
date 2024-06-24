import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@core/redux/app';

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
