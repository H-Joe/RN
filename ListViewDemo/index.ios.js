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
import { MyListView } from "./MyListView";
var ListViewDemo = MyListView
// export default class ListViewDemo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
