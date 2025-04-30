import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna
 */

const initialState = '';

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAuthor } = authorSlice.actions;
export default authorSlice.reducer;
export const getAuthor = (state: RootState) => state.author;
