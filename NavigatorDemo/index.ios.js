/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MyNavigator } from "./Navigatior";
var NavigatorDemo = MyNavigator

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
