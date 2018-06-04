'use strict'
import { combineReducers } from "redux";
import { navReducer } from "./Navigator/index";
import { bookReducer , bookSearchKeywordReducer} from "./Book/bookReducer";
import { bookDetailReducer } from "./Book/bookDetailReducer";
import { movieListReducer, movieSearchKeywordReducer } from "./Movie/movieReducer";

const rootReducer = combineReducers({
  navReducer,
  bookReducer,
  bookSearchKeywordReducer,
  bookDetailReducer,
  movieListReducer,
  movieSearchKeywordReducer
})

export {rootReducer}