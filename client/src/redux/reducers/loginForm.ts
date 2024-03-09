import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const initialState: ILoginForm = {
  uname: '',
  psw: '',
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setLoginForm: (state: ILoginForm, action: PayloadAction<ILoginForm>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoginForm } = loginFormSlice.actions;
export default loginFormSlice.reducer;
export const getLoginForm = (state: RootState) => state.loginForm;
