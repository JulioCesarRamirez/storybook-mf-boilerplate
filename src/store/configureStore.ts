import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './reducers';
import { watchIncrementAsync } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(watchIncrementAsync);

export default store;
