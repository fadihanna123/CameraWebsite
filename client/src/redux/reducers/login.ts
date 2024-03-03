import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const initialState = false;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
export const getLogin = (state: RootState) => state.login;
