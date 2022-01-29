import { ActionTypes } from 'typings';
import { SET_LOGIN } from 'utils/constants';

const initialState: boolean = false;

export const loginReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LOGIN:
      return payload;

    default:
      return state;
  }
};
