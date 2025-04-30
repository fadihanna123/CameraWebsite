import { configureStore } from '@reduxjs/toolkit';

// Components
import authorReducer from '../reducers/author';
import langReducer from '../reducers/lang';
import loadingReducer from '../reducers/loading';
import loginReducer from '../reducers/login';

/**
 * @author Fadi Hanna
 */

export const store = configureStore({
  reducer: {
    login: loginReducer,
    lang: langReducer,
    author: authorReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
