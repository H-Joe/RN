'use strict'
import * as actionType from "../../Constans/actionType";

const initialState = {
  dataSource: [],
  isLoading: true,
  error: null
}

export let bookReducer = (state=initialState, action)=>{
  switch (action.type) {
    case actionType.FETCH_BOOK_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
      break;
    case actionType.FETCH_BOOK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        dataSource: action.result,
      });
      break;
    case actionType.FETCH_BOOK_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        dataSource: [],
        error: action.result
      })
    default:
      return state;
  }
}

export const bookSearchKeywordReducer = (state={keyword:'ReactNative'}, action)=>{
  switch (action.type) {
    case actionType.BOOK_SEARCH_KEY_WORDS_CHANGE:
      return{
        ...state,
        keyword: action.val
      }
      break;
    default:
      return state;
  }
}