import { ActionTypes, IRegisterForm } from 'typings';
import { SET_REGISTER_FORM } from 'utils/constants';

const initialState: IRegisterForm = {
  uname: "",
  email: "",
  mobnr: "",
  psw: "",
  repsw: "",
  img: "",
};

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
