import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import carsReducer from "./carsSlice";
import stocksReducer from "./stocksSlice";

import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
  stocks: stocksReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
