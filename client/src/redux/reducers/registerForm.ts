import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const initialState: IRegisterForm = {
  uname: '',
  email: '',
  mobnr: '',
  psw: '',
  repsw: '',
  avatar: '',
};

export const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setRegisterForm: (state, action: PayloadAction<IRegisterForm>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setRegisterForm } = registerFormSlice.actions;
export default registerFormSlice.reducer;
export const getRegisterForm = (state: RootState) => state.registerForm;
