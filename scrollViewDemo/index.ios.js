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
import { MyScrollView }  from "./MyScrollView";
var scrollViewDemo = MyScrollView

// export default class scrollViewDemo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MyScrollView></MyScrollView>
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});
AppRegistry.registerComponent('scrollViewDemo', () => scrollViewDemo);
