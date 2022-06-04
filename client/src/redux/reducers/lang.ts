import { ActionTypes } from "models";
import { SET_LANG } from "utils/constants";

const initialState: string = "";

export const langReducer = (
    state = initialState,
    { type, payload }: ActionTypes
) => {
    switch (type) {
        case SET_LANG:
            return payload;

        default:
            return state;
    }
};
