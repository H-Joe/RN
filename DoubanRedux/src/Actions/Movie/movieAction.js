'use strict'

import * as actionType from "../../Constans/actionType";
import { Util } from "../../Component/Custom/util";

export const getMovieListAction = (url, isLoading, isLoadMore, isRefreshing) => {
  return dispatch => {
    dispatch(loadingData(isLoading, isLoadMore, isRefreshing))
    return Util.getRequest(url, (data) => {
      dispatch(getData(data))
    }, (error) => {
      dispatch(getDataError(error))
    })
  }
}
export const changeSearchKeywordAction = (val) => {
  return {
    type: actionType.MOVIE_SEARCH_KEY_WORDS_CHANGE,
    val
  }
}

const loadingData = (isLoading, isLoadMore, isRefreshing) => {
  return {
    type: actionType.FETCH_MOVIE_DATAIL_LOADING,
    isLoading: isLoading,
    isLoadMore: isLoadMore,
    isRefreshing: isRefreshing
  }
}

const getData = (result) => {
  return {
    type: actionType.FETCH_MOVIE_DATAIL_SUCCESS,
    result: result
  }
}
const getDataError = (result) => {
  return {
    type: actionType.FETCH_MOVIE_DATAIL_ERROR,
    result: result
  }
}