'use strict'
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "../Reducers/index";
import { navRedMiddware } from "./redux";

const middlewares = [navRedMiddware, thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middlewares))
export {store}