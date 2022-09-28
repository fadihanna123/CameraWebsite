import { createSlice } from '@reduxjs/toolkit';
import { ILoginForm } from 'models';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: ILoginForm = {
  uname: '',
  psw: '',
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setLoginForm: (state, action: PayloadAction<ILoginForm>) => {
      return (state = action.payload);
    },
  },
});

export const { setLoginForm } = loginFormSlice.actions;
export default loginFormSlice.reducer;
export const getLoginForm = (state: RootState) => state.loginForm;
