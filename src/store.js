import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import appReducers from "./reducers";
import { fetchCharacteres } from "./actions/characters";

const logger = createLogger({
  collapsed: true,
  duration: true
});

const sagaMiddleware = createSagaMiddleware();

const app = combineReducers({ appReducers });

const store = createStore(app, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(fetchCharacteres);

export default store;
