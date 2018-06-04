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

import { getData } from "./getData";
import { MyMovieList } from "./movieList";
// var FetchDemo = getData
var FetchDemo = MyMovieList

AppRegistry.registerComponent('FetchDemo', () => FetchDemo);
