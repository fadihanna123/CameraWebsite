import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setAuthor } = authorSlice.actions;
export default authorSlice.reducer;
export const getAuthor = (state: RootState) => state.author;
