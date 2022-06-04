import { combineReducers } from "redux";

import { authorReducer } from "./author";
import { langReducer } from "./lang";
import { loadingReducer } from "./loading";
import { loginReducer } from "./login";
import { loginFormReducer } from "./loginForm";
import { registerFormReducer } from "./registerForm";

export const allReducers = combineReducers({
    loginFormReducer,
    loginReducer,
    loadingReducer,
    authorReducer,
    registerFormReducer,
    langReducer,
});
