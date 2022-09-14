import { ActionTypes } from 'models';
import { SET_LOGIN } from 'utils/constants';

const initialState: boolean = false;

/**
 * Login reducer.
 *
 * @param state
 * @param param1
 * @returns Boolean.
 */

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
