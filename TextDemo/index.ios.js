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
import { Header } from "./Header";
import { News } from "./News";
import { SearchBar } from "./SearchBar";

export default class TextDemo extends Component {
  render () {
    var news = [
      "1、习近平在博鳌亚洲论坛年会开幕式上的演讲( 完整版)",
      "2、习近平会见新加坡总理 巴基斯坦总理  致贺信",
      "3、习近平主席主旨演讲引发热烈反响  博鳌亚洲论坛",
      "4、深度解读：快速读懂习近平博鳌演讲",
      "5、央视快评：中国开放的大门只会越开越大",
    ];
    return (
      <View style={styles.container}>
       {/* <Header name={'网易信息有态度'}></Header> */}
        <Header></Header>
        <SearchBar></SearchBar>
       <News news={news}></News>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  }
});
AppRegistry.registerComponent('TextDemo', () => TextDemo);
