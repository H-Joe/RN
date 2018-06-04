'use strict';

import * as types from "../constants/loginTypes";

let user = {
  name: 'A',
  age: 18
}

export function login() {
  return dispatch => {
    console.log('===正在登陆====');
    dispatch(isLogining());
    let result = fetch('https://www.baidu.com/')
      .then((res) => {
        console.log('===登陆成功====');
        dispatch(loginSuccess(true, user));
      }).catch((e) => {
        console.log('===登陆失败====');
      dispatch(loginError(false));
      })
  }
}

function isLogining() {
  return {
    type: types.LOGIN_IN_DOING
  }
}
function loginSuccess(isSuccess, user) {
  return {
    type: types.LOGIN_IN_DONE,
    user: user,
  }
}
function loginError(isSuccess) {
  return {
    type: types.LOGIN_IN_ERROR,
  }
}