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
  View,
  StatusBar,
  TabBarIOS
} from 'react-native';
import { BookList } from "./iOS_Views/book/book_list";
import { MovieList } from "./iOS_Views/movie/movie_list";
import { Navigation } from "./iOS_Views/commen/navigation";

// 隐藏状态栏
StatusBar.setHidden(true);

export default class DoubanDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'books'
    }
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title={'图书'}
          icon={{ uri: 'book', scale: 8}}
          // systemIcon={'bookmarks'}
          selected={this.state.selectedTab === 'books'}
          onPress={()=>{this.setState({selectedTab: 'books'})}}>
          <Navigation component={BookList}/>
          {/* <BookList/> */}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'电影'}
          icon={{ uri: 'movie', scale: 8}}
          // systemIcon={'favorites'}
          selected={this.state.selectedTab === 'movies'}
          onPress={()=>{this.setState({selectedTab: 'movies'})}}>
          <Navigation component={MovieList}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('DoubanDemo', () => DoubanDemo);
