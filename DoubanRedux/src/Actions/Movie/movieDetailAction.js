'use strict'
import * as actionType from "../../Constans/actionType";
import { Util } from "../../Component/Custom/util";

export const getMovieDetailAction = (url) => {
  return dispatch => {
    dispatch({type: actionType.FETCH_MOVIE_DATAIL_LOADING})
    return Util.getRequest(url, (data)=> {
      dispatch({type: actionType.FETCH_MOVIE_DATAIL_SUCCESS, result: data})
    }, (error)=>{
      dispatch({type: actionType.FETCH_MOVIE_DATAIL_ERROR, result: error})
    })
  }
}
