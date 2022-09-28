import { createSlice } from '@reduxjs/toolkit';
import { IRegisterForm } from 'models';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: IRegisterForm = {
  uname: '',
  email: '',
  mobnr: '',
  psw: '',
  repsw: '',
  img: '',
};

export const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setRegisterForm: (state, action: PayloadAction<IRegisterForm>) => {
      return (state = action.payload);
    },
  },
});

export const { setRegisterForm } = registerFormSlice.actions;
export default registerFormSlice.reducer;
export const getRegisterForm = (state: RootState) => state.registerForm;
