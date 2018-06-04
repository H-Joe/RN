import React, { Component } from "react";
import { 
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator
 } from "react-native";

const regList = {
        SmsCode: /^\d{6}$/,
        /*短信正则*/
        Password: /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}/,
        /*密码正则*/
        Mobile: /^[1][34578][0-9]{9}$/,
        /*手机号正则*/
        RealName: /^[\u4e00-\u9fa5 ]{2,10}$/,
        /*真实姓名正则*/
        WeiXin: /^[a-zA-Z\d_]{5,19}$/,

        BankNum: /^\d{10,19}$/,
        /*银行卡号正则*/
        Money: /^([1-9]\d*|0)$/,
        /*钱正则*/
        Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ /*邮件正则*/
    }

const errorType = {
  Pass : "pass",
  Empty :"empty",
  Regular: "regular"
}
export var Util = {
  windowSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  getRequest(url, successCallBack, failCallBack) {
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((responseJson)=>{
      return successCallBack(responseJson);
    })
    .catch((error)=>{
      return failCallBack(error);
    })
  },
  loading: <ActivityIndicator style={{position: 'absolute',top: Dimensions.get('window').height*0.5-20, left: Dimensions.get('window').width*0.5-10}}/>,
 
  RegexpCheckObj(obj) {
    const name = obj.name;
    const value = obj.value;
    const regular = obj.regular || /.*/;
    const requird = obj.requird || true;
    this.RegexpCheckShow(name, value, regular, requird);
  },
  RegexpCheckShow(name, value, regular, requird){
    var result = this.RegexpCheck(value, regular, requird);
    if (result == errorType.Empty) {
      alert(`${name}输入为空`);
      return false;
    }else if (result == errorType.Regular){
      alert(`${name}输入格式有误`);
      return false;
    }
    return true;
  },
  RegexpCheck (value, regular, requird=true) {
    checkEmpty = (v)=>{
      return (v && v.trim()) ? errorType.Pass : errorType.Empty;
    }
    checkReg = (v, reg)=>{
      return reg.test(v) ? errorType.Pass : errorType.Regular;
    }

    var result = errorType.Pass;
    result = checkEmpty(value);
    if (result !== errorType.Pass) {
      result = requird ? result : result = errorType.Pass;
    }else{
      if (regular && regular.trim()) {
        result = checkReg(value, regList[regular]);
      }
    }
    return result;
  }
 }