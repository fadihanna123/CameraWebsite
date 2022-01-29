import { ActionTypes } from 'typings';
import { SET_AUTHOR } from 'utils/constants';

const initialState: string = "";

export const authorReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_AUTHOR:
      return payload;

    default:
      return state;
  }
};
