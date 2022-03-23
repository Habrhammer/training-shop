import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/root-reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import productsSaga from "./sagas/productSagas.js";

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(productsSaga);