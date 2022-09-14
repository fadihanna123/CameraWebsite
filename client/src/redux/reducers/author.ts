import { ActionTypes } from 'models';
import { SET_AUTHOR } from 'utils/constants';

const initialState: string = '';

/**
 * Author reducer.
 *
 * @param state
 * @param param1
 * @returns String.
 */

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
