'use strict'
import * as actionType from "../../Constans/actionType";
import { Util } from "../../Component/Custom/util";

export let getBookListAction = (url, isLoading)=>{
  return dispatch => {
    dispatch(loadingData(isLoading));
    return Util.getRequest(url, (data)=>{
      dispatch(getData(data));
    },(error)=>{
      dispatch(getDataError(error));
    })
  }
}
export let changeSearchKeywordAction = (val)=>{
  return {
    type: actionType.BOOK_SEARCH_KEY_WORDS_CHANGE,
    val
  }
}

let loadingData = (isLoading) => {
  return {
    type: actionType.FETCH_BOOK_LOADING,
    isLoading: isLoading
  }
}
let getData = (result)=>{
  return{
    type: actionType.FETCH_BOOK_SUCCESS,
    result: result
  }
}
let getDataError = (error)=>{
  return {
    type: actionType.FETCH_BOOK_ERROR,
    result: error,
  }
}