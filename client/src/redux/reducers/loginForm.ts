import { ActionTypes, ILoginForm } from 'models';
import { SET_LOGIN_FORM } from 'utils/constants';

const initialState: ILoginForm = {
  uname: '',
  psw: '',
};

/**
 * Login-form reducer.
 *
 * @param state
 * @param param1
 * @returns ILoginForm object.
 */

export const loginFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LOGIN_FORM:
      return payload;

    default:
      return state;
  }
};
