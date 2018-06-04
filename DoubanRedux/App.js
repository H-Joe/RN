/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  YellowBox
} from 'react-native';
import Root from "./src/index";
export default class App extends Component{
  componentDidMount() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
    return <Root/> 
  }
}

