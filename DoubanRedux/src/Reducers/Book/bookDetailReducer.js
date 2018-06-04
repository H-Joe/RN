'use strict'
import * as actionType from "../../Constans/actionType";

const initialState = {
  bookDada:null,
  error: null
}

export const bookDetailReducer = (state=initialState, action)=>{
  switch (action.type) {
    case actionType.FETCH_BOOK_DATAIL_LOADING:
      return Object.assign({}, state, {
        bookDada: null,
        error: null
      })
      break;
    case actionType.FETCH_BOOK_DATAIL_SUCCESS:
      return Object.assign({}, state, {
        bookDada: action.result,
        error: null
      });
    case actionType.FETCH_BOOK_DATAIL_ERROR:
      return Object.assign({}, state, {
        bookDada: null,
        error: action.result
      })
    default:
      return state;
  }
}