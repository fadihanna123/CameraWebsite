import { ActionTypes, IRegisterForm } from 'models';
import { SET_REGISTER_FORM } from 'utils/constants';

const initialState: IRegisterForm = {
  uname: '',
  email: '',
  mobnr: '',
  psw: '',
  repsw: '',
  img: '',
};

/**
 * Register-form reducer.
 *
 * @param state
 * @param param1
 * @returns IRegisterForm object.
 */

export const registerFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_REGISTER_FORM:
      return payload;

    default:
      return state;
  }
};
