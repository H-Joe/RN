'use strict'
import * as actionType from "../../Constans/actionType";

const initialState = {
  page: 10,
  dataSource: [],
  total: 0,
  isLoading: false,
  isLoadMore: false,
  isRefreshing: false,
  error: null
}

export const movieListReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MOVIE_DATAIL_LOADING:
    return Object.assign({}, state, {
      isLoading: action.isLoading,
      isLoadMore: action.isLoadMore,
      isRefreshing: action.isRefreshing,
      error: null
    })
    case actionType.FETCH_MOVIE_DATAIL_SUCCESS:
      return Object.assign({}, state ,{
        dataSource: state.isLoadMore ? state.dataSource.concat(action.result.subjects) : action.result.subjects,
        total: action.result.total,
        isLoading: false,
        isRefreshing: false,
        isLoadMore: false,
        error: null
      })
    case actionType.FETCH_MOVIE_DATAIL_ERROR:
    return Object.assign({}, state, {
        dataSource: [],
        total: 0,
        isLoading: false,
        isLoadMore: false,
        isRefreshing: false,
        error: action.result
    })
    default:
      return state;
  }
}

export const movieSearchKeywordReducer = (state={keyword:''}, action) => {
  switch (action.type) {
    case actionType.MOVIE_SEARCH_KEY_WORDS_CHANGE:
    return Object.assign({}, state, {
      keyword: action.val
    })
    default:
     return state;
  }
}