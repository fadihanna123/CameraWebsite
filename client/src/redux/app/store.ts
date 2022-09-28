import { configureStore } from '@reduxjs/toolkit';

import authorReducer from '../reducers/author';
import langReducer from '../reducers/lang';
import loadingReducer from '../reducers/loading';
import loginReducer from '../reducers/login';
import loginFormReducer from '../reducers/loginForm';
import registerFormReducer from '../reducers/registerForm';

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    login: loginReducer,
    lang: langReducer,
    author: authorReducer,
    registerForm: registerFormReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
